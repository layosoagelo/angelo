<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Calculation</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .container {
            margin-top: 20px;
        }
        #carts {
            white-space: pre-line; /* Preserves new lines in the cart display */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row mb-3">
            <div class="col">
                <label id="product1" class="form-label">Ice Cream 1</label>
                <input type="number" id="qty1" class="form-control" placeholder="Qty" value="0">
                <span id="price1" class="d-block mt-2">50.00</span>
            </div>
            <div class="col">
                <label id="product2" class="form-label">Ice Cream 2</label>
                <input type="number" id="qty2" class="form-control" placeholder="Qty" value="0">
                <span id="price2" class="d-block mt-2">30.00</span>
            </div>
        </div>
        <div class="mb-3">
            <label>Cart:</label>
            <pre id="carts" class="border p-2"></pre>
        </div>
        <div class="mb-3">
            <label>Total:</label>
            <input type="text" id="total" class="form-control" readonly>
        </div>
        <div class="mb-3">
            <label>Cash:</label>
            <input type="number" id="cash" class="form-control" placeholder="Enter cash">
        </div>
        <div class="mb-3">
            <label>Change:</label>
            <input type="text" id="change" class="form-control" readonly>
        </div>
    </div>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script>
        var product1 = document.getElementById("product1");
        var qty1 = document.getElementById("qty1");
        var price1 = document.getElementById("price1");
        var product2 = document.getElementById("product2");
        var qty2 = document.getElementById("qty2");
        var price2 = document.getElementById("price2");
        var carts = document.getElementById("carts");
        var totalInput = document.getElementById("total");
        var cashInput = document.getElementById("cash");
        var changeInput = document.getElementById("change");

        function addOrder() {
            carts.textContent = "";

            if (parseFloat(qty1.value) > 0) {
                var order1 = qty1.value.toString() + " pcs x " + product1.textContent + " - Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2) + "\n";
                carts.textContent += order1;
            }

            if (parseFloat(qty2.value) > 0) {
                var order2 = qty2.value.toString() + " pcs x " + product2.textContent + " - Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2) + "\n";
                carts.textContent += order2;
            }

            updateTotal(); // Update total after adding orders
        }

        function updateTotal() {
            var total = 0;

            total += parseFloat(qty1.value) * parseFloat(price1.textContent);
            total += parseFloat(qty2.value) * parseFloat(price2.textContent);

            totalInput.value = total.toFixed(2); // Update total input field
            calculateChange(); // Calculate change after updating total
        }

        function calculateChange() {
            var total = parseFloat(totalInput.value);
            var cash = parseFloat(cashInput.value);

            if (!isNaN(total) && !isNaN(cash)) {
                var change = cash - total;
                changeInput.value = change.toFixed(2); // Update change input field
            } else {
                changeInput.value = "";
            }
        }

        qty1.addEventListener("keyup", addOrder);
        qty2.addEventListener("keyup", addOrder);
        cashInput.addEventListener("input", calculateChange);
    </script>
</body>
</html>
