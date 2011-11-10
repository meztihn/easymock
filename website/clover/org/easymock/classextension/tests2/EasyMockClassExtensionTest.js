var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":378,"id":7573,"methods":[{"el":122,"sc":5,"sl":91},{"el":128,"sc":5,"sl":124},{"el":134,"sc":5,"sl":130},{"el":141,"sc":5,"sl":136},{"el":152,"sc":5,"sl":143},{"el":161,"sc":5,"sl":154},{"el":168,"sc":5,"sl":163},{"el":187,"sc":5,"sl":170},{"el":200,"sc":5,"sl":189},{"el":221,"sc":5,"sl":202},{"el":241,"sc":5,"sl":223},{"el":253,"sc":5,"sl":243},{"el":269,"sc":5,"sl":255},{"el":291,"sc":5,"sl":271},{"el":300,"sc":5,"sl":293},{"el":309,"sc":5,"sl":302},{"el":318,"sc":5,"sl":311},{"el":325,"sc":5,"sl":320},{"el":339,"sc":5,"sl":329},{"el":355,"sc":5,"sl":341},{"el":362,"sc":5,"sl":357},{"el":368,"sc":5,"sl":366},{"el":373,"sc":5,"sl":370},{"el":377,"sc":5,"sl":375}],"name":"EasyMockClassExtensionTest","sl":37},{"el":73,"id":7573,"methods":[{"el":47,"sc":9,"sl":44},{"el":51,"sc":9,"sl":49},{"el":56,"sc":9,"sl":53},{"el":61,"sc":9,"sl":58},{"el":72,"sc":9,"sl":63}],"name":"EasyMockClassExtensionTest.ParamEntry","sl":39}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1102":{"methods":[{"sl":143}],"name":"testResetReplay","pass":true,"statements":[{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":149},{"sl":150},{"sl":151}]},"test_1374":{"methods":[{"sl":189}],"name":"testCheckOrder","pass":true,"statements":[{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":197},{"sl":198},{"sl":199}]},"test_1570":{"methods":[{"sl":271}],"name":"testNamedMock","pass":true,"statements":[{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":279},{"sl":283},{"sl":285},{"sl":286},{"sl":287},{"sl":288},{"sl":289},{"sl":290}]},"test_1608":{"methods":[{"sl":49},{"sl":53},{"sl":58},{"sl":63},{"sl":311},{"sl":357},{"sl":366},{"sl":370},{"sl":375}],"name":"testNiceMock","pass":true,"statements":[{"sl":50},{"sl":54},{"sl":59},{"sl":60},{"sl":64},{"sl":65},{"sl":67},{"sl":68},{"sl":70},{"sl":313},{"sl":314},{"sl":315},{"sl":316},{"sl":358},{"sl":359},{"sl":360},{"sl":361},{"sl":367},{"sl":372},{"sl":376}]},"test_1829":{"methods":[{"sl":223}],"name":"testMock_Partial","pass":true,"statements":[{"sl":226},{"sl":230},{"sl":231},{"sl":233},{"sl":235},{"sl":237},{"sl":238},{"sl":240}]},"test_2104":{"methods":[{"sl":49},{"sl":53},{"sl":58},{"sl":63},{"sl":302},{"sl":341},{"sl":366},{"sl":370},{"sl":375}],"name":"testNormalMock","pass":true,"statements":[{"sl":50},{"sl":54},{"sl":59},{"sl":60},{"sl":64},{"sl":65},{"sl":67},{"sl":68},{"sl":70},{"sl":304},{"sl":305},{"sl":306},{"sl":307},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":347},{"sl":348},{"sl":350},{"sl":351},{"sl":367},{"sl":372},{"sl":376}]},"test_2248":{"methods":[{"sl":154}],"name":"testResetTo","pass":true,"statements":[{"sl":156},{"sl":158},{"sl":159},{"sl":160}]},"test_2459":{"methods":[{"sl":255}],"name":"testCompare","pass":true,"statements":[{"sl":258},{"sl":259},{"sl":261},{"sl":262},{"sl":264},{"sl":266},{"sl":268}]},"test_2654":{"methods":[{"sl":170}],"name":"testVarargs","pass":true,"statements":[{"sl":172},{"sl":173},{"sl":175},{"sl":176},{"sl":177},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":184},{"sl":186}]},"test_2739":{"methods":[{"sl":320}],"name":"testCreateMockBuilder","pass":true,"statements":[{"sl":322},{"sl":323},{"sl":324}]},"test_2872":{"methods":[{"sl":202}],"name":"testStrictMock_Partial","pass":true,"statements":[{"sl":205},{"sl":209},{"sl":210},{"sl":212},{"sl":214},{"sl":216},{"sl":217}]},"test_2894":{"methods":[{"sl":163}],"name":"testMakeThreadSafe","pass":true,"statements":[{"sl":165},{"sl":167}]},"test_2906":{"methods":[{"sl":49},{"sl":53},{"sl":58},{"sl":63},{"sl":293},{"sl":329},{"sl":366},{"sl":370},{"sl":375}],"name":"testStrictMock","pass":true,"statements":[{"sl":50},{"sl":54},{"sl":59},{"sl":60},{"sl":64},{"sl":65},{"sl":67},{"sl":68},{"sl":70},{"sl":295},{"sl":296},{"sl":297},{"sl":298},{"sl":330},{"sl":331},{"sl":332},{"sl":333},{"sl":334},{"sl":335},{"sl":367},{"sl":372},{"sl":376}]},"test_305":{"methods":[{"sl":124},{"sl":136}],"name":"testClassMocking","pass":true,"statements":[{"sl":126},{"sl":127},{"sl":137},{"sl":138},{"sl":139},{"sl":140}]},"test_606":{"methods":[{"sl":243}],"name":"testNiceMock_Partial","pass":true,"statements":[{"sl":245},{"sl":249},{"sl":251},{"sl":252}]},"test_968":{"methods":[{"sl":130},{"sl":136}],"name":"testInterfaceMocking","pass":true,"statements":[{"sl":132},{"sl":133},{"sl":137},{"sl":138},{"sl":139},{"sl":140}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [2104, 2906, 1608], [2104, 2906, 1608], [], [], [2104, 2906, 1608], [2104, 2906, 1608], [], [], [], [2104, 2906, 1608], [2104, 2906, 1608], [2104, 2906, 1608], [], [], [2104, 2906, 1608], [2104, 2906, 1608], [2104, 2906, 1608], [], [2104, 2906, 1608], [2104, 2906, 1608], [], [2104, 2906, 1608], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [305], [], [305], [305], [], [], [968], [], [968], [968], [], [], [305, 968], [305, 968], [305, 968], [305, 968], [305, 968], [], [], [1102], [], [1102], [1102], [1102], [1102], [1102], [1102], [1102], [], [], [2248], [], [2248], [], [2248], [2248], [2248], [], [], [2894], [], [2894], [], [2894], [], [], [2654], [], [2654], [2654], [], [2654], [2654], [2654], [], [2654], [2654], [2654], [], [2654], [2654], [], [2654], [], [], [1374], [], [], [1374], [1374], [1374], [1374], [1374], [1374], [1374], [1374], [], [], [2872], [], [], [2872], [], [], [], [2872], [2872], [], [2872], [], [2872], [], [2872], [2872], [], [], [], [], [], [1829], [], [], [1829], [], [], [], [1829], [1829], [], [1829], [], [1829], [], [1829], [1829], [], [1829], [], [], [606], [], [606], [], [], [], [606], [], [606], [606], [], [], [2459], [], [], [2459], [2459], [], [2459], [2459], [], [2459], [], [2459], [], [2459], [], [], [1570], [], [], [1570], [1570], [1570], [1570], [1570], [1570], [], [], [], [1570], [], [1570], [1570], [1570], [1570], [1570], [1570], [], [], [2906], [], [2906], [2906], [2906], [2906], [], [], [], [2104], [], [2104], [2104], [2104], [2104], [], [], [], [1608], [], [1608], [1608], [1608], [1608], [], [], [], [2739], [], [2739], [2739], [2739], [], [], [], [], [2906], [2906], [2906], [2906], [2906], [2906], [2906], [], [], [], [], [], [2104], [2104], [2104], [2104], [2104], [], [2104], [2104], [], [2104], [2104], [], [], [], [], [], [1608], [1608], [1608], [1608], [1608], [], [], [], [], [2104, 2906, 1608], [2104, 2906, 1608], [], [], [2104, 2906, 1608], [], [2104, 2906, 1608], [], [], [2104, 2906, 1608], [2104, 2906, 1608], [], []]