function(instance, properties, context) {

  const label = properties.label;

  if (label) {
    instance.data.tippy.enable();
    instance.data.tippy.setContent(label);
    let props = {
      arrow: properties.arrow,
      animation: properties.animation,
      delay: [properties.showDelay, properties.hideDelay],
    }
    if(properties.placement) {props.placement = properties.placement}
    instance.data.tippy.setProps(props);
    if (properties.singleton) {
      window.tippyPluginSingleton.instances.push(instance.data.tippy);
      window.tippyPluginSingleton.singleton.setInstances(
        window.tippyPluginSingleton.instances
      );
    }
  } else {
    instance.data.tippy.disable();
    instance.data.tippy.setContent("");
  }
}