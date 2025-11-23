// Homework 6.1 - Task 3
// Create a function to check an order based on available stock and ordered quantity


function checkOrder(available , ordered) {
    if (ordered === 0) {
        return 'Your order is empty';
    } else if (ordered > available) {
        return 'Your order is too large, not enough goods in stock';
    } else {
        return 'Your order is accepted';
    }
}

console.log('\nOrder check results. We have 100 items in stock.');

console.log('\nOrder nothing: ' + checkOrder(100, 0));
console.log('Order 150: ' + checkOrder(100, 150));
console.log('Order 50: ' + checkOrder(100, 50));