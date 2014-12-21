// import Ember from 'ember';

// export default Ember.Route.extend({
//   beforeModel: function() {
//     return this.checkoutJS || (this.checkoutJS = Ember.$.getScript("https://checkout.stripe.com/v3/checkout.js"));
//   },
//   model: function() {
//     return this.modelFor('company');
//   },
//   stripeCheckout: function(options) {
//     console.log(App.config.stripeKey);
//     return new Ember.RSVP.Promise((function(_this) {
//       return function(resolve) {
//         return StripeCheckout.open({
//           name: App.config.applicationName,
//           key: App.config.stripeKey,
//           image: App.config.checkoutLogoUrl,
//           amount: options.amount,
//           currency: options.currency,
//           description: options.description,
//           panelLabel: options.panelLabel,
//           allowRememberMe: false,
//           token: function(response) {
//             return resolve(response.id);
//           }
//         });
//       };
//     })(this));
//   },
//   updateSubscription: function(opts) {
//     var company;
//     this.controller.set('isUpdating', true);
//     company = this.modelFor('company');
//     company.setProperties(opts);
//     return company.save().then((function(_this) {
//       return function() {
//         return _this.transitionTo("subscription");
//       };
//     })(this)).then(null, (function(_this) {
//       return function(xhr) {
//         var message, _ref;
//         message = ((_ref = xhr.responseJSON) != null ? _ref.error : void 0) || "Modifying subscription failed, please try again";
//         _this.notifier.error(message);
//         return company.rollback();
//       };
//     })(this)).then((function(_this) {
//       return function() {
//         _this.controller.set('isUpdating', false);
//         return company.set('cardToken', null);
//       };
//     })(this));
//   },
//   actions: {
//     subscribe: function(plan) {
//       return this.stripeCheckout({
//         amount: plan.get('amount'),
//         currency: plan.get('currency'),
//         description: "" + (plan.get('name')) + " plan",
//         panelLabel: "" + (plan.get('interval').capitalize()) + "ly"
//       }).then((function(_this) {
//         return function(cardToken) {
//           return _this.updateSubscription({
//             plan: plan,
//             cardToken: cardToken
//           });
//         };
//       })(this));
//     },
//     changeSubscription: function(plan) {
//       if (confirm("Are you sure you want to change subscription plan?")) {
//         return this.updateSubscription({
//           plan: plan
//         });
//       }
//     },
//     changeCard: function() {
//       return this.stripeCheckout({
//         panelLabel: 'Update card'
//       }).then((function(_this) {
//         return function(cardToken) {
//           return _this.updateSubscription({
//             cardToken: cardToken
//           });
//         };
//       })(this));
//     },
//     cancelSubscription: function() {
//       if (confirm("Are you sure you want to cancel your subscription?")) {
//         return this.updateSubscription({
//           plan: null
//         });
//       }
//     }
//   }
// });
