import { Component, OnInit, ViewChild, Input } from '@angular/core';
import ldBar from '@loadingio/loading-bar';

@Component({
  selector: 'ld-bar',
  template: `
  <div #root></div>
  `,
  styles: []
})
export class AngularLoadingBarComponent implements OnInit {
  @ViewChild('root') root;
  @Input() value: any;
  @Input() config: any;
  private ldbar: ldBar;

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes) {
    if(this.ldbar && changes.value && changes.value.currentValue) {
      this.ldbar.set(+changes.value.currentValue);
    }
  }

  ngAfterViewInit() {
    var config = this.config || {};
    if(!config.value && this.value) {
      config.value = this.value;
    }
    var element = this.root.nativeElement;
    var attributes = element.parentNode.attributes;
    for(let i=0;i < attributes.length;i++) {
      if(attributes[i].name.startsWith("data-")) {
        element.setAttribute(attributes[i].name, attributes[i].value);
        config[attributes[i].name.replace("data-","")] = attributes[i].value;
      }
    }
    this.ldbar = new ldBar(element, config);
  }
}
