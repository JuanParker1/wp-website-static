<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
var e = document.querySelector('[data-toggle="price"]');
    "undefined" != typeof CountUp && e && e.addEventListener("change", function(e) {
        var t, c, o, n;
        t = e.target,
        c = t.checked,
        o = t.dataset.target,
        n = document.querySelectorAll(o),
        [].forEach.call(n, function(e) {
            var t = e.dataset.annual
              , o = e.dataset.monthly
              , n = e.dataset.decimals ? e.dataset.decimals : true
              , a = e.dataset.duration ? e.dataset.duration : 1
              , i = e.dataset.options ? JSON.parse(e.dataset.options) : null
              , l = c ? new CountUp(e,t,o,n,a,i) : new CountUp(e,o,t,n,a,i);
            l.error ? console.error(l.error) : l.start()
        })
    })</script>
<!-- end Simple Custom CSS and JS -->
