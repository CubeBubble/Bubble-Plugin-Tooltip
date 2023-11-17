function(instance, context) {
    
    const container = instance.canvas.parentNode;

    instance.data.tippy = tippy(container, {
      content: null,
    });

    instance.data.tippy.disable();

}