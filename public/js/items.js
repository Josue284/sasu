﻿$('div').click(function () { if ($(this).context.getAttribute('class') == 'css-1q93h7b') { document.querySelectorAll('.css-gu191w').forEach((element) => { $(element).attr('class', 'css-1q93h7b'); }); $(this).attr('class', 'css-gu191w'); } }); $('.css-xpmka5').click(function () { const contents = document.querySelectorAll('[data-simplebar]'); contents.forEach((c) => { $(c).removeClass('show'); }); const t = $(this).attr('target'); $(t).addClass('show'); }); let gems = document.querySelectorAll('[t^=gems]'); let coins = document.querySelectorAll('[t^=wallet]'); let img = document.querySelectorAll('[class^=css-4m5pi9]'); let title = document.querySelectorAll('[class^=css-13ih77d]'); for (let i = 0; i < gems.length; i++) { (function(index) { gems[index].addEventListener('click', async function () { $('.css-sdznik').addClass('show'); let name = title[index].innerHTML; let src = img[index].src; let category = $(this).context.getAttribute('i'); let price = this.innerText.slice(2); let wallet = $('.userInfo-gemsLength').html(); $('.css-19f9cvr').attr('src', src); $('.css-19f9cvr').attr('alt', name); $('.css-19f9cvr').attr('c', category); $('.css-1oyi1el').html(name); $('.css-1jphnei').html(this.innerText+' Gemas'); if (parseInt(price) > parseInt(wallet)) { $('.css-11bl024').attr('disabled', 'disabled'); $('.css-11bl024').addClass('disabled'); $('.css-11bl024').html('Insuficiente'); } else { $('.css-11bl024').removeAttr("disabled"); $('.css-11bl024').removeClass('disabled'); $('.css-11bl024').html('Confirmar'); } }); coins[index].addEventListener('click', async function () { $('.css-sdznik').addClass('show'); let name = title[index].innerHTML; let src = img[index].src; let category = $(this).context.getAttribute('i'); let price = this.innerText.slice(2); let wallet = $('#data').attr('s'); $('.css-19f9cvr').attr('src', src); $('.css-19f9cvr').attr('alt', name); $('.css-19f9cvr').attr('c', category); $('.css-1oyi1el').html(name); $('.css-1jphnei').html(this.innerText+' Créditos'); if (parseInt(price) > parseInt(wallet)) { $('.css-11bl024').attr('disabled', 'disabled'); $('.css-11bl024').addClass('disabled'); $('.css-11bl024').html('Insuficiente'); } else { $('.css-11bl024').removeAttr("disabled"); $('.css-11bl024').removeClass('disabled'); $('.css-11bl024').html('Confirmar'); }; }) })(i) }; $('#confirm').click(() => { let id = $('#data').attr('i'); let n = $('.css-19f9cvr').attr('alt'); let s = $('.css-19f9cvr').attr('src'); let c = $('.css-19f9cvr').attr('c'); let pr = $('.css-1jphnei').html().split(' '); let p = pr[1]; let t; if (pr[2] == "Gemas") { t = "gems"; } else if (pr[2] == "Créditos") { t = "wallet"; }; let user = { "name": n, "src": s, "price": p, "type": t, "category": c }; fetch(`/tienda/${id}/complete`, { method: "POST", body: JSON.stringify(user), headers: { 'Content-Type': 'application/json' } }).then(res => res.json()); setTimeout(function(){ window.location.reload(); }, 1000); }); $('#cancel').click(() => { $('.css-sdznik').removeClass('show'); });