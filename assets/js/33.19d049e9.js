(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{449:function(e,t,r){"use strict";r.r(t);var a=r(62),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"数据更新流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据更新流程设计"}},[e._v("#")]),e._v(" 数据更新流程设计")]),e._v(" "),r("h2",{attrs:{id:"一-react-更新前置设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-react-更新前置设计"}},[e._v("#")]),e._v(" 一 React 更新前置设计")]),e._v(" "),r("h3",{attrs:{id:"批量更新-减少更新次数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#批量更新-减少更新次数"}},[e._v("#")]),e._v(" 批量更新-减少更新次数")]),e._v(" "),r("p",[e._v("虽然 JS 执行是快速的，但是浏览器绘制的成本却是昂贵的，所以良好的性能保障是：")]),e._v(" "),r("ol",[r("li",[e._v("减少更新次数，从而减少浏览器的渲染绘制操作，比如重绘，回流等。")]),e._v(" "),r("li",[e._v("避免 JS 的执行，影响到浏览器的绘制。")])]),e._v(" "),r("p",[e._v("我们都知道 React 也是采用数据驱动的，所以当每一次触发 setState 或者是 useState 更新 state 的时候，本质上都是数据变化-> DOM 元素变化 -> 浏览器绘制，那么正常情况下，如果一次用户交互事件，比如点击事件中，可能会触发多次更新，接下来就会多次更改 DOM 状态，进而占用浏览器大量的时间，所以为了避免这种情况发生，React 通过更新上下文的方式，来判断每一次更新是在什么上下文环境下，比如在 React 事件系统中，就有 EventContext。在这些上下文中的更新，都是 React 可控的，进而可以批量处理这些更新任务。")]),e._v(" "),r("p",[e._v("这种批量更新的方式，一定程度上减少了更新次数，但是这种控制手段也仅仅只能对同一上下文中的更新生效，打个比方，一些微任务中的更新，这种更新就不受 React 更新上下文的控制了，这样浏览器还是需要处理一个更新之后，马上执行下一个任务，如果有很多这样的任务，就会导致一直执行 JS 线程，从而阻塞了渲染线程的绘制。")]),e._v(" "),r("h3",{attrs:{id:"更新调度-更新由浏览器控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新调度-更新由浏览器控制"}},[e._v("#")]),e._v(" 更新调度-更新由浏览器控制")]),e._v(" "),r("p",[e._v("还好 React 中一个重要的模块去处理更新，那就是——"),r("strong",[e._v("Scheduler")]),e._v("，在 React 中维护了一个更新队列中，去保存这些更新任务，当第一次产生更新的时候，会先把当前更新任务放入到更新队列中，然后先执行更新，接下来调度会向浏览器请求空闲时间，在此期间，如果有其他更新任务插入，比如上述的"),r("strong",[e._v("微任务")]),e._v("，就会放入更新队列中，如果浏览器空闲了，就会判断更新队列中是否还有待更新的任务，如果有那么执行，接下来再向浏览器请求下一个空闲帧，一直到待更新队列中没有更新任务，这样就保证了更新任务导致浏览器卡住的情况发生，把"),r("strong",[e._v("更新的主动权交给了浏览器")]),e._v("。")]),e._v(" "),r("p",[e._v("那就是更新任务，并不是相同的，而是有不同优先级的任务，")]),e._v(" "),r("h3",{attrs:{id:"更新标识-lane-新版-和-expirationtime-老版"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新标识-lane-新版-和-expirationtime-老版"}},[e._v("#")]),e._v(" 更新标识 Lane (新版) 和 ExpirationTime (老版)")]),e._v(" "),r("p",[e._v("那就是 Lane 模型，Lane 采用位运算的方式，一个 Lane 上可以有多个任务合并，这样能够描述出一个 fiber 节点上，存在多个更新任务，那么就可以优先处理高优先级任务，我们还是列举上面产品需求例子，在 Lane 模式下，每个需求给设置 P0，P1 等不同的等级，这样就保证了需求进行的有序性。")]),e._v(" "),r("h3",{attrs:{id:"进入更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进入更新"}},[e._v("#")]),e._v(" 进入更新")]),e._v(" "),r("p",[e._v("React 首先要做的事情就是根据更新标识找到发生更新的源头，这还是在标记更新标识的时候（上一步），会通过当前 fiber 的 return 属性更新父级 fiber 链上的属性 childLanes，这样在从 root 开始向下调和的时候，就能够直接通过这个属性找到发生更新的组件对应的 fiber，接下来执行更新。")]),e._v(" "),r("h2",{attrs:{id:"二-react-更新后置设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-react-更新后置设计"}},[e._v("#")]),e._v(" 二 React 更新后置设计")]),e._v(" "),r("h3",{attrs:{id:"render-和-commit-阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render-和-commit-阶段"}},[e._v("#")]),e._v(" render 和 commit 阶段")]),e._v(" "),r("p",[e._v("在 render 阶段中，核心思想就是 diff 对比，整个 render 都围绕着 diff 展开，首先就是 React 需要通过对比 childLanes 来找到更新的组件。找到对应的组件后，就会执行组件的 render 函数，然后会得到新的 element 对象，接下来就是新 element 和老 fiber 的 diff ，通过对比对单元素节点和多元素节点来复用老 fiber ，创建新 fiber 。")]),e._v(" "),r("p",[e._v("在 render 阶段 React 并不会实质性的执行更新，而是只会给 fiber 打上不同的 flag 标志，证明当前 fiber 发生了什么变化。")]),e._v(" "),r("p",[e._v("在 render 阶段中，会通过 fiber 上面的 child ，return 和 sibling 三个指针来遍历，找到需要更新的 fiber 并且执行更新。在此其中，会采用优先深度遍历的方式，遍历 child，当没有 child 之后会遍历 sibling 兄弟节点，最后到父元素节点。这种方式的好处，就是可以方便形成真实 DOM 树结构，在 fiber 初始化流程中，创建 DOM 元素是在 render 阶段完成的（初始化流程）。")]),e._v(" "),r("p",[e._v("经历了 render 阶段之后，就进入到了 commit 阶段，commit 阶段会执行更新，然后就会执行一些生命周期和更新回调函数，所以 React 开发者就可以拿到更新后的 DOM 元素。")])])}),[],!1,null,null,null);t.default=i.exports}}]);