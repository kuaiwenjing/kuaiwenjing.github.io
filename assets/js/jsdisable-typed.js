/* 停用 typed.js —— 主题通过 window.Typed 检测此对象 */
window.Typed = function() {
  // 什么也不做，直接把节点文本按原顺序拼到元素里
  const el = arguments[0].el;
  const strings = arguments[0].strings || [];
  if (el) el.textContent = strings.join("  •  ");
};
