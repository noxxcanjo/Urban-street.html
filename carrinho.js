angular.module('BuyCart', ['ui.router']);

// angular.module('BuyCart').config(['$locationProvider', ($locationProvider) => {
//   $locationProvider.html5Mode(true);
// }]);

angular.module('BuyCart').config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state({
    name: 'productList',
    component: 'productList'
  }).state({
    name: 'userData',
    component: 'userData'
  }).state({
    name: 'deliverySettings',
    component: 'deliverySettings'
  }).state({
    name: 'paymentSettings',
    component: 'paymentSettings'
  }).state({
    name: 'finishOrder',
    component: 'finishOrder'
  });
}]);

angular.module('BuyCart').run(['$timeout', '$state', ($timeout, $state) => {
  $timeout(() => $state.go("productList"))
}]);

angular.module('BuyCart').component('buyCartHeaderItem', {
  bindings: {
    state: '@',
    icon: '@'
  },
  transclude: true,
  template: `
    <a class="nav-link d-flex flex-column align-items-center"
        ng-click="$ctrl.navigateTo()"
        ng-class="{active: $ctrl.isActive()}">
      <i class="fa {{ $ctrl.icon }} fa-2x"></i>
      <ng-transclude></ng-transclude>
    </a>
  `,
  controller: ['$scope', '$state', function ($scope, $state) {
    let self = this;
  
    self.navigateTo = () => $state.go(self.state);
    self.isActive = () => $state.is(self.state);

    self.$onInit = () => {
    };
  }]
});

angular.module('BuyCart').component('buyCartHeader', {
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <nav class="nav nav-pills nav-justified">
          <buy-cart-header-item class="nav-item"
              state="productList"
              icon="fa-shopping-cart">
            <b>Itens</b>
          </buy-cart-header-item>
          <buy-cart-header-item class="nav-item"
              state="userData"
              icon="fa-id-card">
            <b>Dados</b>
          </buy-cart-header-item>
          <buy-cart-header-item class="nav-item"
              state="deliverySettings"
              icon="fa-truck">
            <b>Entrega</b>
          </buy-cart-header-item>
          <buy-cart-header-item class="nav-item"
              state="paymentSettings"
              icon="fa-credit-card">
            <b>Pagamento</b>
          </buy-cart-header-item>
          <buy-cart-header-item class="nav-item"
              state="finishOrder"
              icon="fa-check-circle">
            <b>Concluir compra</b>
          </buy-cart-header-item>
        </nav>
      </div>
    </div>
  `,
  controller: ['$scope', function ($scope) {
    let self = this;

    self.$onInit = () => {
    };
  }]
});

angular.module('BuyCart').component('productDetails', {
  bindings: {
    product: '<'
  },
  template: `
    <div class="row">
      <div class="col-2">
        <img class="img-thumbnail" src="{{ $ctrl.product.preview }}">
      </div>
      <div class="col-4 d-flex justify-content-center flex-column">
        <p class="m-0">{{ $ctrl.product.name }}</p>
        <small class="text-muted">{{ $ctrl.product.description }}</small>
      </div>
      <div class="col-2 d-flex align-items-center text-center">
        <div class="flex-column">
          <select class="custom-select" ng-model="$ctrl.product.amount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <button class="btn btn-outline-light btn-sm btn-block text-dark mt-1" type="buttom">
            <i class="fa fa-trash"></i> Remover
          </button>
        </div>
      </div>
      <div class="col-2 d-flex align-items-center text-center">
        {{ $ctrl.product.value | number:2 }}
      </div>
      <div class="col-2 d-flex align-items-center text-center">
        {{ $ctrl.product.value * $ctrl.product.amount | number:2 }}
      </div>
    </div>
  `,
  controller: function ($scope) {
    let self = this;
    
    self.getBalanceClass = () => ({
      'text-muted': self.wallet.balance === 0,
      'text-success': self.wallet.balance > 0,
      'text-important': self.wallet.balance < 0
    });

    self.$onInit = () => {
    };
  }
});

angular.module('BuyCart').component('productList', {
  template: `
    <div>
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-2 text-center"><b>Preview</b></div>
            <div class="col-4"><b>Product</b></div>
            <div class="col-2"><b>Amount</b></div>
            <div class="col-2"><b>Unit. Value</b></div>
            <div class="col-2"><b>Final Value</b></div>
          </div>
        </div>
        <div class="list-group list-group-flush">
          <div class="list-group-item"
              ng-repeat="product in $ctrl.productList">
            <product-details product="product"></product-details>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-outline-primary">Escolher mais produtos</button>
        <button class="btn btn-primary">Comprar</button>
      </div>
    </div>
  `,
  controller: function ($scope) {
    let self = this;
    
    self.productList = [];
    
    self.$onInit = () => {
      for (let i = 0; i < 3; i++) {
        let value = i * Math.floor((Math.random() * 10) + 1);

        let amount = Math.floor((Math.random() * 5) + 1);

        self.productList.push({
          id: i,
          name: `Product #${i}`,
          description: `Product #${i}`,
          preview: `https://fakeimg.pl/180x120/?text=Product%20#${i}`,
          amount: amount,
          value: (i % 2) ? value : -(value)
        });
      }
    };
  }
});

angular.module('BuyCart').component('userData', {
  template: `
    <div class="card">
      <div class="card-body">userData</div>
    </div>
  `,
  controller: function ($scope) {
    let self = this;

    self.$onInit = () => {
    };
  }
});

angular.module('BuyCart').component('deliverySettings', {
  template: `
    <div class="card">
      <div class="card-body">deliverySettings</div>
    </div>
  `,
  controller: function ($scope) {
    let self = this;

    self.$onInit = () => {
    };
  }
});

angular.module('BuyCart').component('paymentSettings', {
  template: `
    <div class="card">
      <div class="card-body">paymentSettings</div>
    </div>
  `,
  controller: function ($scope) {
    let self = this;

    self.$onInit = () => {
    };
  }
});

angular.module('BuyCart').component('finishOrder', {
  template: `
    <div class="card">
      <div class="card-body">finishOrder</div>
    </div>
  `,
  controller: function ($scope) {
    let self = this;

    self.$onInit = () => {
    };
  }
});
