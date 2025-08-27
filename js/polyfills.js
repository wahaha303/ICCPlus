(function(arr){
  arr.forEach(function(proto){
    if (!proto.hasOwnProperty('append')) {
      Object.defineProperty(proto, 'append', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          var argArr = Array.prototype.slice.call(arguments),
              docFrag = document.createDocumentFragment();
          argArr.forEach(function(argItem){
            docFrag.appendChild(
              argItem instanceof Node ? argItem : document.createTextNode(String(argItem))
            );
          });
          this.appendChild(docFrag);
        }
      });
    }
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

(function(arr) {
  arr.forEach(function(proto) {
    if (!proto.hasOwnProperty('before')) {
      Object.defineProperty(proto, 'before', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          var argArr = Array.prototype.slice.call(arguments),
              docFrag = document.createDocumentFragment();
          argArr.forEach(function(argItem) {
            docFrag.appendChild(
              argItem instanceof Node ? argItem : document.createTextNode(String(argItem))
            );
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    }
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

if (typeof queueMicrotask !== 'function') {
  window.queueMicrotask = function (callback) {
    Promise.resolve()
      .then(callback)
      .catch(e => setTimeout(() => { throw e; }, 0))
  }
}

if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat(
        (Array.isArray(toFlatten) && depth > 1)
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  };
}

if (!Object.fromEntries) {
  Object.fromEntries = function (entries) {
    if (!entries || !entries[Symbol.iterator]) {
      throw new Error('Object.fromEntries() requires a single iterable argument');
    }

    const obj = {};
    for (const [key, value] of entries) {
      obj[key] = value;
    }
    return obj;
  };
}

if (!Array.prototype.findLast) {
  Array.prototype.findLast = function (predicate, thisArg) {
    if (this == null) throw new TypeError('Array.prototype.findLast called on null or undefined');
    if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');

    const list = Object(this);
    const length = list.length >>> 0;

    for (let i = length - 1; i >= 0; i--) {
      const value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }

    return undefined;
  };
}