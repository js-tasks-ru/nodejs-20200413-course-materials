class SomeClass {
  static add(resource) {
    return this._checkIfIndexExists(resource)
      // .catch === .then(null, onReject)
      .then(() => this._putDocument(resource))
      .catch(() => this._createIndex(resource))
      .then(() => this._putDocument(resource))
  }
}


/*
class SomeClass {
  static add(resource) {
    return new Promise((resolve, reject) => {
      this._checkIfIndexExists(resource).then(() z=> {
        this._putDocument(resource)
          .then(data => resolve(data))
          .catch(error => reject(error));
      })
    .catch(() => {
        this._createIndex(resource).then(() => {
          this._putDocument(resource)
            .then(data => resolve(data))
            .catch(error => reject(error));
        }).catch(error => reject(error));
      });
    });
  }
}
*/
