(function (W){
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

    function microId(len) {
      let id = "";
      for (let i = 0; i < len; i++) {
        const idx = Math.floor(Math.random() * ALPHABET.length);
        id += ALPHABET.charAt(idx);
      }
      
      return id;
    }

    function clone(value) {
      return JSON.parse(JSON.stringify(value))
    }
    function cloneAndSet(value, overrides) {
      return {...clone(value), ...overrides};
    }

    W.microId = microId;
    W.clone = clone;
    W.cloneAndSet = cloneAndSet;
})(window);