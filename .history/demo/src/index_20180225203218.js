/**
 * Generic dairy product.
 * @constructor
 */
function DairyProduct() { }

/**
 * Check whether the dairy product is solid at room temperature.
 * @abstract
 * @return {boolean}
 */
DairyProduct.prototype.isSolid = function () {
    throw new Error('must be implemented by subclass!');
};

/**
 * Cool, refreshing milk.
 * @constructor
 */
function Milk() { }

/**
 * Check whether milk is solid at room temperature.
 * @return {boolean} Always returns false.
 */
Milk.prototype.isSolid = function () {
    return false;
};
