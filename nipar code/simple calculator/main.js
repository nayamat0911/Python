

        function add() {
            var a, b, c;
            a = Number(document.getElementById("first").value);
            b = Number(document.getElementById("second").value);
            c = a + b;
            document.getElementById("answer").value = c;
        }
        function sub() {
            var a, b, c;
            a = Number(document.getElementById("first").value);
            b = Number(document.getElementById("second").value);
            c = b - a;
            document.getElementById("answer").value = c;
        }
        function mul() {
            var a, b, c;
            a = Number(document.getElementById("first").value);
            b = Number(document.getElementById("second").value);
            c = a * b;
            document.getElementById("answer").value = c;
        }
        function div() {
            var a, b, c;
            a = Number(document.getElementById("first").value);
            b = Number(document.getElementById("second").value);
            c = b / a;
            document.getElementById("answer").value = c;
        }
        function mod() {
            var a, b, c;
            a = Number(document.getElementById("first").value);
            b = Number(document.getElementById("second").value);
            c = b % a;
            document.getElementById("answer").value = c;
        }
        function max() {
            var a, b, c;
            a = Number(document.getElementById("first").value);
            b = Number(document.getElementById("second").value);
            if (a > b) {
                c = a;
            } else {
                c = b;
            }
            document.getElementById("answer").value = c;
        }

