function(instance, properties, context) {
    
	const html = document.createElement('div')
    html.innerHTML = properties.html;

    if (properties.html) {
      instance.data.tippy.enable();
      instance.data.tippy.setContent(html);
      if(properties.placement) {instance.data.tippy.setProps({
          placement: properties.placement
      });}
    } else {
      instance.data.tippy.disable();
      instance.data.tippy.setContent(null);
    }
  
}