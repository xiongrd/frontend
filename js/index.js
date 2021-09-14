var treeData = {
    name: "My Tree",
    children: [
      { name: "hello" },
      { name: "wat" },
      {
        name: "child folder",
        children: [
          {
            name: "child folder",
            children: [{ name: "hello" }, { name: "wat" }]
          },
          { name: "hello" },
          { name: "wat" },
          {
            name: "child folder",
            children: [{ name: "hello" }, { name: "wat" }]
          }
        ]
      }
    ]
  };

var app = new Vue({
    el:'#app',
    data:{
        treeData: treeData,
        firstCollections:
        [
            {title:'oimo.js',desc:"Lightweight 3d physics engine for javascript",url:'https://www.baidu.com'},
            {title:'matter.js',desc:"Matter.js is a 2D physics engine for the web",url:'https://brm.io/matter-js/'},
        ]
    },
    methods: {
        makeFolder: function(item) {
          Vue.set(item, "children", []);
          this.addItem(item);
        },
        addItem: function(item) {
          item.children.push({
            name: "new stuff"
          });
        }
      }
})