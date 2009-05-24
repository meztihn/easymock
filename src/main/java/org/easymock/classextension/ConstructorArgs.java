/*
 * Copyright (c) 2003-2009 OFFIS, Henri Tremblay.
 * This program is made available under the terms of the MIT License.
 */
package org.easymock.classextension;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;

public class ConstructorArgs {

    private final Constructor<?> constructor;

    private final Object[] initArgs;

    /**
     * @param constructor
     *            Constructor to be called when creating the mock
     * @param initArgs
     *            Arguments passed to the constructor
     */
    public ConstructorArgs(Constructor<?> constructor, Object... initArgs) {
        this.constructor = constructor;
        this.initArgs = initArgs;

        validateArgs();
    }

    private void validateArgs() {

        Class<?>[] paramTypes = constructor.getParameterTypes();

        if (initArgs.length != paramTypes.length) {
            throw new IllegalArgumentException(
                    "Number of provided arguments doesn't match constructor ones");
        }

        for (int i = 0; i < initArgs.length; i++) {

            Class<?> paramType = paramTypes[i];
            Object arg = initArgs[i];

            if (paramType.isPrimitive()) {
                if (arg == null) {
                    throw new IllegalArgumentException(
                            "Null argument for primitive param " + i);
                }

                try {
                    Field field = arg.getClass().getDeclaredField("TYPE");
                    Class<?> argType = (Class<?>) field.get(null);

                    if (paramType.equals(argType)) {
                        continue;
                    }
                } catch (Exception e) {
                    throw throwException(paramType, arg);
                }

                throw throwException(paramType, arg);
            }
            if (arg == null) {
                continue;
            }
            if (!paramType.isAssignableFrom(arg.getClass())) {
                throw throwException(paramType, arg);
            }
        }
    }

    private IllegalArgumentException throwException(Class<?> paramType,
            Object arg) {
        return new IllegalArgumentException(arg + " isn't of type " + paramType);
    }

    public Object[] getInitArgs() {
        return initArgs;
    }

    public Constructor<?> getConstructor() {
        return constructor;
    }
}
