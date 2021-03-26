var oc=oc||{};oc.components=oc.components||{};oc.components['5fdefe196b0b275434be2070ed0ab98dabc7cf82']=function(model){
  var modelHTML =  model.__html ? model.__html : '';
  var staticPath = model.reactComponent.props._staticPath;
  var props = JSON.stringify(model.reactComponent.props);
  var randomId = Math.random() * 10000000;
  var reactRootId = "oc-reactRoot-Homepage-" + randomId;
  return '<div id="'+ reactRootId +'" class="oc-reactRoot-Homepage">' + modelHTML + '</div>' +
    '<style>.oc__Homepage-components-Banner-Banner-css__banner__3-LBarBf{margin-bottom:15px}.oc__Homepage-components-Banner-Banner-css__w-full__1F9GcPqi{width:100%}</style>' +
    '<script>' +
    'window.oc = window.oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'.oc__Homepage-components-Banner-Banner-css__banner__3-LBarBf{margin-bottom:15px}.oc__Homepage-components-Banner-Banner-css__w-full__1F9GcPqi{width:100%}\');' +
      'oc.requireSeries([{"global":["Object","assign"],"url":"https://unpkg.com/es6-object-assign@1.1.0/dist/object-assign-auto.min.js","name":"Object.assign"},{"global":"PropTypes","url":"https://unpkg.com/prop-types@15.7.2/prop-types.min.js","name":"prop-types"},{"global":"React","url":"https://unpkg.com/react@16.9.0/umd/react.production.min.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@16.9.0/umd/react-dom.production.min.js","name":"react-dom"}], function(){' +
        'oc.require(' +
          '["oc", "reactComponents", "3b502c84691b2f8d0ec15342a45ede5c3d13b3b4"],' + 
          '"' + staticPath + 'react-component.js",' +
          'function(ReactComponent){' +
            'var targetNode = document.getElementById("'+ reactRootId +'");' +
            'targetNode.setAttribute("id","");' +
            'ReactDOM.hydrate(React.createElement(ReactComponent,' +  props + '),targetNode);' +
          '}' +
        ');' +
      '});' +
    '});' +
  '</script>'
}