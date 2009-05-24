/*
 * Copyright (c) 2003-2009 OFFIS, Henri Tremblay. 
 * This program is made available under the terms of the MIT License.
 */
package org.easymock.classextension.tests2;

import static org.easymock.classextension.EasyMock.*;
import static org.junit.Assert.*;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.ArrayList;

import org.easymock.classextension.ConstructorArgs;
import org.junit.Test;

public class PartialMockingTest {

    public static abstract class A {

        public String s;

        public int i;

        protected A(String s) {
            this.s = s;
        }

        private A(int i) {
            this.i = i;
        }

        protected abstract int foo();
    }

    @SuppressWarnings("unchecked")
    @Test
    public void testPartialMock_PublicConstructor() throws Exception {
        Constructor<?> cstr = ArrayList.class.getConstructor(Integer.TYPE);
        ConstructorArgs constructorArgs = new ConstructorArgs(cstr, 3);
        ArrayList<String> list = createMock(ArrayList.class, constructorArgs,
                new Method[0]);
        list.add("test"); // shouldn't crash since constructor was called
    }

    @Test
    public void testPartialMock_ProtectedConstructor() throws Exception {
        Constructor<?> cstr = A.class.getDeclaredConstructor(String.class);
        ConstructorArgs constructorArgs = new ConstructorArgs(cstr, "test");
        A a = createMock(A.class, constructorArgs, new Method[0]);
        assertEquals("test", a.s); // make sure constructor was called

        // Check that abstract method is mocked by default
        expect(a.foo()).andReturn(3);
        replay(a);
        assertEquals(3, a.foo());
        verify(a);
    }

    @Test(expected = RuntimeException.class)
    public void testPartialMock_ConstructorNotFound() throws Exception {
        Constructor<?> cstr = ArrayList.class.getConstructor(Integer.TYPE);
        ConstructorArgs constructorArgs = new ConstructorArgs(cstr, 2.0);
        try {
            createMock(ArrayList.class, constructorArgs, new Method[0]);
        } catch (RuntimeException e) {
            assertEquals("Failed to find constructor for param types", e
                    .getMessage());
            throw e;
        }
    }

    @Test(expected = IllegalArgumentException.class)
    public void testPartialMock_InvalidParams() throws Exception {
        Constructor<?> cstr = ArrayList.class.getConstructor(Integer.TYPE);
        ConstructorArgs constructorArgs = new ConstructorArgs(cstr, "test");
        createMock(ArrayList.class, constructorArgs, new Method[0]);
    }

    @Test(expected = RuntimeException.class)
    public void testPartialMock_ExceptionInConstructor() throws Exception {
        Constructor<?> cstr = ArrayList.class.getConstructor(Integer.TYPE);
        ConstructorArgs constructorArgs = new ConstructorArgs(cstr, -5);
        try {
            createMock(ArrayList.class, constructorArgs, new Method[0]);
        } catch (RuntimeException e) {
            assertEquals(
                    "Failed to instantiate mock calling constructor: Exception in constructor",
                    e.getMessage());
            throw e;
        }
    }

}
