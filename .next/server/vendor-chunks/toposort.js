/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/toposort";
exports.ids = ["vendor-chunks/toposort"];
exports.modules = {

/***/ "(ssr)/./node_modules/toposort/index.js":
/*!****************************************!*\
  !*** ./node_modules/toposort/index.js ***!
  \****************************************/
/***/ ((module) => {

eval("\n/**\n * Topological sorting function\n *\n * @param {Array} edges\n * @returns {Array}\n */\n\nmodule.exports = function(edges) {\n  return toposort(uniqueNodes(edges), edges)\n}\n\nmodule.exports.array = toposort\n\nfunction toposort(nodes, edges) {\n  var cursor = nodes.length\n    , sorted = new Array(cursor)\n    , visited = {}\n    , i = cursor\n    // Better data structures make algorithm much faster.\n    , outgoingEdges = makeOutgoingEdges(edges)\n    , nodesHash = makeNodesHash(nodes)\n\n  // check for unknown nodes\n  edges.forEach(function(edge) {\n    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {\n      throw new Error('Unknown node. There is an unknown node in the supplied edges.')\n    }\n  })\n\n  while (i--) {\n    if (!visited[i]) visit(nodes[i], i, new Set())\n  }\n\n  return sorted\n\n  function visit(node, i, predecessors) {\n    if(predecessors.has(node)) {\n      var nodeRep\n      try {\n        nodeRep = \", node was:\" + JSON.stringify(node)\n      } catch(e) {\n        nodeRep = \"\"\n      }\n      throw new Error('Cyclic dependency' + nodeRep)\n    }\n\n    if (!nodesHash.has(node)) {\n      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: '+JSON.stringify(node))\n    }\n\n    if (visited[i]) return;\n    visited[i] = true\n\n    var outgoing = outgoingEdges.get(node) || new Set()\n    outgoing = Array.from(outgoing)\n\n    if (i = outgoing.length) {\n      predecessors.add(node)\n      do {\n        var child = outgoing[--i]\n        visit(child, nodesHash.get(child), predecessors)\n      } while (i)\n      predecessors.delete(node)\n    }\n\n    sorted[--cursor] = node\n  }\n}\n\nfunction uniqueNodes(arr){\n  var res = new Set()\n  for (var i = 0, len = arr.length; i < len; i++) {\n    var edge = arr[i]\n    res.add(edge[0])\n    res.add(edge[1])\n  }\n  return Array.from(res)\n}\n\nfunction makeOutgoingEdges(arr){\n  var edges = new Map()\n  for (var i = 0, len = arr.length; i < len; i++) {\n    var edge = arr[i]\n    if (!edges.has(edge[0])) edges.set(edge[0], new Set())\n    if (!edges.has(edge[1])) edges.set(edge[1], new Set())\n    edges.get(edge[0]).add(edge[1])\n  }\n  return edges\n}\n\nfunction makeNodesHash(arr){\n  var res = new Map()\n  for (var i = 0, len = arr.length; i < len; i++) {\n    res.set(arr[i], i)\n  }\n  return res\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdG9wb3NvcnQvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhc2VydG51YW5uaW0uZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3RvcG9zb3J0L2luZGV4LmpzPzA5OGMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFRvcG9sb2dpY2FsIHNvcnRpbmcgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBlZGdlc1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWRnZXMpIHtcbiAgcmV0dXJuIHRvcG9zb3J0KHVuaXF1ZU5vZGVzKGVkZ2VzKSwgZWRnZXMpXG59XG5cbm1vZHVsZS5leHBvcnRzLmFycmF5ID0gdG9wb3NvcnRcblxuZnVuY3Rpb24gdG9wb3NvcnQobm9kZXMsIGVkZ2VzKSB7XG4gIHZhciBjdXJzb3IgPSBub2Rlcy5sZW5ndGhcbiAgICAsIHNvcnRlZCA9IG5ldyBBcnJheShjdXJzb3IpXG4gICAgLCB2aXNpdGVkID0ge31cbiAgICAsIGkgPSBjdXJzb3JcbiAgICAvLyBCZXR0ZXIgZGF0YSBzdHJ1Y3R1cmVzIG1ha2UgYWxnb3JpdGhtIG11Y2ggZmFzdGVyLlxuICAgICwgb3V0Z29pbmdFZGdlcyA9IG1ha2VPdXRnb2luZ0VkZ2VzKGVkZ2VzKVxuICAgICwgbm9kZXNIYXNoID0gbWFrZU5vZGVzSGFzaChub2RlcylcblxuICAvLyBjaGVjayBmb3IgdW5rbm93biBub2Rlc1xuICBlZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICBpZiAoIW5vZGVzSGFzaC5oYXMoZWRnZVswXSkgfHwgIW5vZGVzSGFzaC5oYXMoZWRnZVsxXSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBub2RlLiBUaGVyZSBpcyBhbiB1bmtub3duIG5vZGUgaW4gdGhlIHN1cHBsaWVkIGVkZ2VzLicpXG4gICAgfVxuICB9KVxuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAoIXZpc2l0ZWRbaV0pIHZpc2l0KG5vZGVzW2ldLCBpLCBuZXcgU2V0KCkpXG4gIH1cblxuICByZXR1cm4gc29ydGVkXG5cbiAgZnVuY3Rpb24gdmlzaXQobm9kZSwgaSwgcHJlZGVjZXNzb3JzKSB7XG4gICAgaWYocHJlZGVjZXNzb3JzLmhhcyhub2RlKSkge1xuICAgICAgdmFyIG5vZGVSZXBcbiAgICAgIHRyeSB7XG4gICAgICAgIG5vZGVSZXAgPSBcIiwgbm9kZSB3YXM6XCIgKyBKU09OLnN0cmluZ2lmeShub2RlKVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIG5vZGVSZXAgPSBcIlwiXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBkZXBlbmRlbmN5JyArIG5vZGVSZXApXG4gICAgfVxuXG4gICAgaWYgKCFub2Rlc0hhc2guaGFzKG5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVua25vd24gbm9kZS4gTWFrZSBzdXJlIHRvIHByb3ZpZGVkIGFsbCBpbnZvbHZlZCBub2Rlcy4gVW5rbm93biBub2RlOiAnK0pTT04uc3RyaW5naWZ5KG5vZGUpKVxuICAgIH1cblxuICAgIGlmICh2aXNpdGVkW2ldKSByZXR1cm47XG4gICAgdmlzaXRlZFtpXSA9IHRydWVcblxuICAgIHZhciBvdXRnb2luZyA9IG91dGdvaW5nRWRnZXMuZ2V0KG5vZGUpIHx8IG5ldyBTZXQoKVxuICAgIG91dGdvaW5nID0gQXJyYXkuZnJvbShvdXRnb2luZylcblxuICAgIGlmIChpID0gb3V0Z29pbmcubGVuZ3RoKSB7XG4gICAgICBwcmVkZWNlc3NvcnMuYWRkKG5vZGUpXG4gICAgICBkbyB7XG4gICAgICAgIHZhciBjaGlsZCA9IG91dGdvaW5nWy0taV1cbiAgICAgICAgdmlzaXQoY2hpbGQsIG5vZGVzSGFzaC5nZXQoY2hpbGQpLCBwcmVkZWNlc3NvcnMpXG4gICAgICB9IHdoaWxlIChpKVxuICAgICAgcHJlZGVjZXNzb3JzLmRlbGV0ZShub2RlKVxuICAgIH1cblxuICAgIHNvcnRlZFstLWN1cnNvcl0gPSBub2RlXG4gIH1cbn1cblxuZnVuY3Rpb24gdW5pcXVlTm9kZXMoYXJyKXtcbiAgdmFyIHJlcyA9IG5ldyBTZXQoKVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGVkZ2UgPSBhcnJbaV1cbiAgICByZXMuYWRkKGVkZ2VbMF0pXG4gICAgcmVzLmFkZChlZGdlWzFdKVxuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKHJlcylcbn1cblxuZnVuY3Rpb24gbWFrZU91dGdvaW5nRWRnZXMoYXJyKXtcbiAgdmFyIGVkZ2VzID0gbmV3IE1hcCgpXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZWRnZSA9IGFycltpXVxuICAgIGlmICghZWRnZXMuaGFzKGVkZ2VbMF0pKSBlZGdlcy5zZXQoZWRnZVswXSwgbmV3IFNldCgpKVxuICAgIGlmICghZWRnZXMuaGFzKGVkZ2VbMV0pKSBlZGdlcy5zZXQoZWRnZVsxXSwgbmV3IFNldCgpKVxuICAgIGVkZ2VzLmdldChlZGdlWzBdKS5hZGQoZWRnZVsxXSlcbiAgfVxuICByZXR1cm4gZWRnZXNcbn1cblxuZnVuY3Rpb24gbWFrZU5vZGVzSGFzaChhcnIpe1xuICB2YXIgcmVzID0gbmV3IE1hcCgpXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICByZXMuc2V0KGFycltpXSwgaSlcbiAgfVxuICByZXR1cm4gcmVzXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/toposort/index.js\n");

/***/ })

};
;