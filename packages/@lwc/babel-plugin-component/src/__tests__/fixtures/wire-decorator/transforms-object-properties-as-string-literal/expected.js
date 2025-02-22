import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./test.html";
import { getFoo } from "data-service";

class Test {
  wiredProp;
}

_registerDecorators(Test, {
  wire: {
    wiredProp: {
      adapter: getFoo,
      dynamic: ["key 1"],
      config: function ($cmp) {
        return {
          "key 2": ["fixed", "array"],
          "key 1": $cmp.prop
        };
      }
    }
  }
});

export default _registerComponent(Test, {
  tmpl: _tmpl
});