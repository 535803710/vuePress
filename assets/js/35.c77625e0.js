(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{450:function(t,s,a){"use strict";a.r(s);var n=a(62),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"函数的协变与逆变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的协变与逆变"}},[t._v("#")]),t._v(" 函数的协变与逆变")]),t._v(" "),a("h2",{attrs:{id:"从-equal-中说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-equal-中说起"}},[t._v("#")]),t._v(" 从 equal 中说起")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Equals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Y")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Y")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("经验老道的程序员都见过这样一段神奇的代码。")]),t._v(" "),a("p",[t._v("这段代码定义了一个名为 "),a("code",[t._v("Equals")]),t._v(" 的类型别名。它使用了 "),a("code",[t._v("TypeScript")]),t._v(" 的类型推断和类型扩展来检查两个类型 "),a("code",[t._v("X")]),t._v(" 和 "),a("code",[t._v("Y")]),t._v(" 是否完全相同。")]),t._v(" "),a("p",[t._v("最早出现在这位大佬的讨论中 "),a("a",{attrs:{href:"'https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650'"}},[t._v("这里")])]),t._v(" "),a("p",[t._v("具体解释可以"),a("a",{attrs:{href:"https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考这里"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这一段关于函数的比较让我想起了关于函数的协变和逆变")]),t._v(" "),a("h2",{attrs:{id:"函数的签名类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的签名类型"}},[t._v("#")]),t._v(" 函数的签名类型")]),t._v(" "),a("p",[t._v("对于函数类型比较，事实上我们要比较的是 参数类型 与 返回值类型。")]),t._v(" "),a("p",[t._v("让我们进入一个场景")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Husky")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们明确了两点")]),t._v(" "),a("ul",[a("li",[t._v("Dog 是 Animal 的子类，Animal 是 Dog 的父类")]),t._v(" "),a("li",[t._v("Husky 是 Dog 的子类，Dog 是 Husky 的父类")])]),t._v(" "),a("p",[t._v("当我们有一个函数 接收的是 Dog 类型 ，返回的是 Dog 类型时可以写成这样")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DogFactory")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Dog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Dog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("下面我简化为 Dog->Dog")]),t._v(" "),a("p",[t._v("因为对于函数的比较我们比较 参数类型 和 返回值类型")]),t._v(" "),a("p",[t._v("所以 我们会有以下几种情况")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pub-a953275fa2c34c18b80fc1f84e3ea746.r2.dev/xiaowo/2023/08/ae354d80b7e9f35565095d307d575676.png",alt:""}})]),t._v(" "),a("p",[t._v("在比较函数的参数的时候。"),a("strong",[t._v("如果一个值能够被赋值给某个类型的变量，那么可以认为这个值的类型为此变量类型的子类型。")])]),t._v(" "),a("p",[t._v("比如 ：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeDogBark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Dog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeDogBark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Husky")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没问题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeDogBark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不行")]),t._v("\n")])])]),a("p",[t._v("这个函数就只能接受 Dog 类型或者 Dog 类型的子类型，而不接受 Dog 类型的父类型")]),t._v(" "),a("p",[t._v("严格的说，因为派生类会保留基类的方法和属性，因此其与基类类型兼容。")]),t._v(" "),a("blockquote",[a("p",[t._v("里氏替换原则：子类可以扩展父类的功能，但不能改变父类原有的功能，子类型（subtype）必须能够替换掉他们的基类型（base type）。")])]),t._v(" "),a("p",[t._v("回到这个函数，他会实例化一个狗，然后叫两下。实际上这个函数同时约束了参数的类型和返回值的类型。首先必须是一个狗，而且返回的也是一个狗。 Dog->Dog")]),t._v(" "),a("p",[t._v("对于这两条约束依次进行检查：")]),t._v(" "),a("p",[t._v("对于"),a("code",[t._v("Animal/Dog/Corgi -> Animal")]),t._v(" 类型，无论穿什么都不满足条件 ，因为返回的是 Animal 类型 不一定是 Dog 类型")]),t._v(" "),a("p",[t._v("对于 "),a("code",[t._v("Husky -> Husky 与 Husky -> Dog")]),t._v("，其返回值满足了条件，但是参数类型又不满足了。这两个类型需要接受 "),a("code",[t._v("Husky")]),t._v(" 类型。但我们可没说一定会传入哈士奇，如果我们传个德牧，程序可能就崩溃了。")]),t._v(" "),a("p",[t._v("对于"),a("code",[t._v("Dog -> Corgi、Animal -> Corgi、Animal -> Dog")]),t._v("，首先它们的参数类型正确的满足了约束，能接受一只狗狗。其次，它们的返回值类型也一定会是一条狗。 狗满足了动物的类型。")]),t._v(" "),a("p",[t._v("而实际上，如果我们去掉了包含 Dog 类型的例子，会发现只剩下 Animal -> Corgi 了，也即是说，(Animal → Corgi) ≼ (Dog → Dog) 成立（A ≼ B 意为 A 为 B 的子类型）。")]),t._v(" "),a("p",[t._v("所以结论：")]),t._v(" "),a("ul",[a("li",[t._v("参数类型允许为 Dog 的父类型，不允许为 Dog 的子类型。")]),t._v(" "),a("li",[t._v("返回值类型允许为 Dog 的子类型，不允许为 Dog 的父类型。")])]),t._v(" "),a("h2",{attrs:{id:"协变与逆变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协变与逆变"}},[t._v("#")]),t._v(" 协变与逆变")]),t._v(" "),a("p",[t._v("(Animal → Husky) ≼ (Dog → Dog) 成立（A ≼ B 意为 A 为 B 的子类型）。")]),t._v(" "),a("p",[t._v("考虑 Husky ≼ Dog ≼ Animal")]),t._v(" "),a("p",[t._v("当有函数类型 Dog -> Dog，仅有 (Animal → Corgi) ≼ (Dog → Dog) 成立（即能被视作此函数的子类型，）。这里的参数类型与返回值类型实际上可以各自独立出来看：")]),t._v(" "),a("ol",[a("li",[t._v("Husky ≼ Dog 假设我们对其进行返回值类型的函数签名类型包装，则有 (T → Corgi) ≼ (T → Dog)，也即是说，在我需要狗狗的地方，哈士奇都是可用的。即不考虑参数类型的情况，在包装为函数签名的返回值类型后，其子类型层级关系保持一致。")]),t._v(" "),a("li",[t._v("考虑 Dog ≼ Animal （狗是 Anilmal 的子类型），如果换成参数类型的函数签名类型包装，则有 (Animal -> T) ≼ (Dog -> T)，也即是说，在我需要条件满足是动物时，狗狗都是可用的。即不考虑返回值类型的情况，在包装为函数签名的参数类型后，其子类型层级关系发生了逆转。")])]),t._v(" "),a("p",[t._v("实际上，这就是 "),a("strong",[t._v("TypeScript 中的协变（ covariance ） 与逆变（ contravariance ）")]),t._v(" 在函数签名类型中的表现形式。这两个单词最初来自于几何学领域中："),a("strong",[t._v("随着某一个量的变化，随之变化一致的即称为协变，而变化相反的即称为逆变。")])]),t._v(" "),a("p",[t._v("简单的说："),a("strong",[t._v("我需要参数是基类的类型，你传子类是可以的，我需要返回是基类的类型，你返回子类是可以的")])]),t._v(" "),a("p",[t._v("用 TypeScript 的思路进行转换，即如果有 A ≼ B ，协变意味着"),a("code",[t._v("Wrapper<A> ≼ Wrapper<B>")]),t._v("，而逆变意味着 "),a("code",[t._v("Wrapper<B> ≼ Wrapper<A>")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsFuncArgType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsFuncReturnType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n再使用这两个包装类型演示我们上面的例子：\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 成立：(T -> Corgi) ≼ (T -> Dog)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CheckReturnType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AsFuncReturnType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Corgi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsFuncReturnType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Dog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 不成立：(Dog -> T) ≼ (Animal -> T)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CheckArgType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AsFuncArgType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Dog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsFuncArgType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Animal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("进行一个总结：")]),t._v(" "),a("p",[a("strong",[t._v("函数类型的参数类型使用子类型逆变的方式确定是否成立，而返回值类型使用子类型协变的方式确定。")])]),t._v(" "),a("h2",{attrs:{id:"strictfunctiontypes-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictfunctiontypes-配置"}},[t._v("#")]),t._v(" StrictFunctionTypes 配置")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Ftsconfig%23strictFunctionTypes",target:"_blank",rel:"noopener noreferrer"}},[t._v("strictFunctionTypes"),a("OutboundLink")],1),t._v("：在比较两个函数类型是否兼容时，将对函数参数进行更严格的检查（When enabled, this flag causes functions parameters to be checked more correctly），而实际上，这里的更严格指的即是 对函数参数类型启用逆变检查。")]),t._v(" "),a("p",[t._v("如果启用了这个配置才是逆变检查，那么原来是什么样的？")]),t._v(" "),a("ul",[a("li",[t._v("原来是双变的")])]),t._v(" "),a("p",[t._v("在实际场景中的逆变检查又是什么样的？")]),t._v(" "),a("ul",[a("li",[t._v("需要开启"),a("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftypescript-eslint%2Ftypescript-eslint%2Fblob%2Fmain%2Fpackages%2Feslint-plugin%2Fdocs%2Frules%2Fmethod-signature-style.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("method-signature-style"),a("OutboundLink")],1),t._v("它的意图是约束在接口中声明方法时，需要使用 property 而非 method 形式.")])]),t._v(" "),a("p",[t._v("总结：\n现在学习了 TypeScript 函数类型的兼容性比较，这应该带给了你一些新的启发：原来不只是原始类型、联合类型、对象类型等可以比较，函数类型之间同样是能够比较的。而对我们开头提出的，如何对两个函数类型进行兼容性比较这一问题，我想你也有了答案：")]),t._v(" "),a("p",[t._v("比较它们的参数类型是否是反向的父子类型关系，返回值是否是正向的父子类型关系。也就是判断"),a("strong",[t._v("参数类型是否遵循类型逆变，返回值类型是否遵循类型协变")]),t._v("，")]),t._v(" "),a("p",[t._v("我们可以通过 TypeScript ESLint 的规则以及 strictFunctionTypes 配置，来为 interface 内的函数声明启用严格的检查模式。如果你的项目内已经配置了 TypeScript ESLint，不妨添加上 method-signature-style 这条规则来让你的代码质量更上一层楼。")])])}),[],!1,null,null,null);s.default=e.exports}}]);