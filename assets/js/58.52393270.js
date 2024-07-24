(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{473:function(v,a,e){"use strict";e.r(a);var t=e(62),_=Object(t.a)({},(function(){var v=this,a=v.$createElement,e=v._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"程序设计的层次"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#程序设计的层次"}},[v._v("#")]),v._v(" 程序设计的层次")]),v._v(" "),e("h2",{attrs:{id:"mvcs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvcs"}},[v._v("#")]),v._v(" MVCS")]),v._v(" "),e("p",[v._v("MVCS是一种基于MVC架构的设计模式，它在MVC的基础上增加了服务层（Service layer）。")]),v._v(" "),e("p",[v._v("MVCS的四个组成部分分别是：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("模型（Model）：模型是应用程序中用于表示数据和状态的部分。模型负责处理数据的读取、写入和处理，以及应用程序的业务逻辑。模型并不关心数据的展示方式或者用户界面的细节。")])]),v._v(" "),e("li",[e("p",[v._v("视图（View）：视图是应用程序中用户界面的部分。视图显示模型的数据和状态，并与用户进行交互。视图并不关心数据在模型中是如何表示的或者模型中的业务逻辑。")])]),v._v(" "),e("li",[e("p",[v._v("控制器（Controller）：控制器是应用程序中连接模型和视图的部分。控制器负责处理用户的交互行为并作出相应的响应，包括读取和更新模型中的数据、更新视图的状态、和协调模型和视图之间的关系。")])]),v._v(" "),e("li",[e("p",[v._v("服务层（Service layer）：服务层是应用程序中处理业务逻辑的部分。服务层通常包含了一些业务逻辑的方法，例如用户认证、数据验证、数据处理和数据库访问等。服务层和模型之间可以互相调用，但是服务层并不关心数据在模型中的具体实现方式。")])])]),v._v(" "),e("p",[v._v("MVCS的优点在于将应用程序的业务逻辑分离开来，使得应用程序更加灵活和可维护。另外，MVCS还可以实现数据缓存和分层的数据访问，从而提高应用程序的性能和可扩展性。")]),v._v(" "),e("p",[v._v("MVCS可以被认为是MVC模式的一种扩展，适用于大型和复杂的应用程序。它被广泛应用于Web开发和桌面应用程序开发中。例如，ASP.NET MVC和Rails框架就是基于MVCS的。")]),v._v(" "),e("h2",{attrs:{id:"mvvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[v._v("#")]),v._v(" MVVM")]),v._v(" "),e("p",[v._v("MVVM 是一种前端开发的架构模式，用于将应用程序的用户界面（View）、应用程序逻辑（ViewModel）和数据（Model）分离开来。")]),v._v(" "),e("p",[v._v("MVVM 的三个组成部分分别是：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("视图（View）：视图是应用程序中用户界面的部分。视图显示应用程序的状态，并接收用户的输入。视图并不关心数据的来源或数据如何处理。")])]),v._v(" "),e("li",[e("p",[v._v("视图模型（ViewModel）：视图模型是应用程序中的中间层，负责处理视图的数据和用户交互行为。视图模型将视图需要的数据从模型中提取出来，并将用户的输入转化为模型能够理解的格式。视图模型不关心视图的具体实现方式。")])]),v._v(" "),e("li",[e("p",[v._v("模型（Model）：模型是应用程序中用于表示数据和状态的部分。模型负责处理数据的读取、写入和处理，以及应用程序的业务逻辑。模型并不关心数据的展示方式或者用户界面的细节。")])])]),v._v(" "),e("p",[v._v("MVVM 的优点在于将数据和用户界面的处理逻辑分离开来，使得应用程序更加容易维护和扩展。另外，MVVM 还可以实现数据绑定和命令绑定，从而实现更加灵活的数据交互和用户交互。")]),v._v(" "),e("p",[v._v("MVVM 最初是由微软提出的，用于开发 WPF 和 Silverlight 应用程序。随着 Web 前端技术的发展，MVVM 也被广泛应用于 Web 前端开发中，例如 Vue.js、AngularJS 和 Knockout.js 等框架都是基于 MVVM 的。")]),v._v(" "),e("h2",{attrs:{id:"在vue-js中不要过度层次设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在vue-js中不要过度层次设计"}},[v._v("#")]),v._v(" 在Vue.js中不要过度层次设计")]),v._v(" "),e("p",[v._v("Vue.js 采取的是MVVM的设计架构\n"),e("img",{attrs:{src:"https://pub-a953275fa2c34c18b80fc1f84e3ea746.r2.dev/xiaowo/2023/08/315b2c6aa06aad6fea9a10801e93a501.png",alt:""}})]),v._v(" "),e("p",[v._v("而在开发中我们可能会遇到这种情况")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://pub-a953275fa2c34c18b80fc1f84e3ea746.r2.dev/xiaowo/2023/08/35735b54d5ab54784a08f89575ea0ae0.png",alt:""}})]),v._v(" "),e("p",[v._v("这种情况在原有的MVVM层级上增加了Pinia来存储数据，又通过StoreToRefs() 来完成响应式的转换。")]),v._v(" "),e("p",[v._v("这样会导致：")]),v._v(" "),e("ol",[e("li",[v._v("层级太多，导致开发和维护起来页面太多，阅读困难")]),v._v(" "),e("li",[v._v("每一个页面都有一个对应的Store保存数据，增加性能消耗。")]),v._v(" "),e("li",[v._v("背离Pinia的初衷，为了跨页面/组件共享数据")])]),v._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),e("p",[v._v("在我们开发工作中使用MVVM的模式就完全够用。")]),v._v(" "),e("p",[v._v("如果程序逻辑很复杂的话我们可以引入服务层（Service layer）来做到功能的分离")])])}),[],!1,null,null,null);a.default=_.exports}}]);