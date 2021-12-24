(function(e) {
    function t(t) {
        for (var i, r, l = t[0], s = t[1], c = t[2], m = 0, u = []; m < l.length; m++)
            r = l[m],
            Object.prototype.hasOwnProperty.call(n, r) && n[r] && u.push(n[r][0]),
            n[r] = 0;
        for (i in s)
            Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
        d && d(t);
        while (u.length)
            u.shift()();
        return o.push.apply(o, c || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], i = !0, l = 1; l < a.length; l++) {
                var s = a[l];
                0 !== n[s] && (i = !1)
            }
            i && (o.splice(t--, 1),
            e = r(r.s = a[0]))
        }
        return e
    }
    var i = {}
      , n = {
        app: 0
    }
      , o = [];
    function r(t) {
        if (i[t])
            return i[t].exports;
        var a = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, r),
        a.l = !0,
        a.exports
    }
    r.m = e,
    r.c = i,
    r.d = function(e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (r.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(a, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return a
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , s = l.push.bind(l);
    l.push = t,
    l = l.slice();
    for (var c = 0; c < l.length; c++)
        t(l[c]);
    var d = s;
    o.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "0439": function(e, t, a) {
        e.exports = a.p + "media/video.245a9e2a.mp4"
    },
    "0453": function(e, t, a) {
        e.exports = a.p + "img/features-5.43dbd80b.png"
    },
    "0a17": function(e, t, a) {
        e.exports = a.p + "img/features-4.04097986.png"
    },
    "0a30": function(e, t, a) {
        e.exports = a.p + "img/banner.8f554e87.jpg"
    },
    "0a56": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAACWCAMAAAB+W6gfAAABnlBMVEUAAAD////c3P////////////////////8/ZvP///////////////////////9IZf////////////////////9AZvT///////9AZvP///////9EY/dAZvP///9AZvT///9BZvb///9AZvNAZvP///8/ZvP///89PT1BZvT///9AZvM8PDz///8/ZvP///////////////////9AZvP///9BZvT///////////////88PDz///////88PDz///9AZvNAZvM/ZvRAZvT///9QUFA/ZvP///9AZvNAZvQ/ZvP///////////////////////9EaO3///////////88PDw8PDz///9AZfNAZvP///9AZvP///////////////8+Pj4+Pj5FRUVAZvP///////9AZvRAZvP///9CZvL///9CY/c/avE8PDz///////////9AZvM8PDxAZvM/ZfBCQkL///9AQED///9BZfFAZvVAY/M8PDw9PT09PT1AZvM8PDw9PT0+Pj49PT0+Pj7///89PT0+Z/E8PDz///9AZvPsHKQHAAAAh3RSTlMAYQJS9PjgQ93DkiDvgzQFEqCABS/z3dDIKRsJoHtYSxtp+O7Mw5hfNAvq6ufk1726q52SjkUsGBQJ+NSzjoyBenArDgXPx7yyrKR1bFVPJg4IB+vRwbammYljWUc/PDw2DriolYhLOSYiHxG4r2NcUU8+IR8eFCQjFxXt5t/VpYaAfnNmsSVKIznvAAAMsUlEQVR42uzZOYrEMBSE4cKXUfBuIFCmI0ix5NyJwTjpbnpjqGsPZmAWetZo/KC+yKDwx1rxlXW+ncvJIuVfRTuV821e8Sc9FcqulNTxS+O9kIzTJfRlzZB/ldelh8sUSZb7+Jt81wNpqancruSWjDxcf0o4BCPrrHo7lOdKWhjwjaWStUF2qm19lm/GjccA2bFwpLUvByOnEbJr48QY8JmcyDRAdm7YOmU8yE+Mmj5dCJFPjwUTrUNc6Mb0UJVR/dzokQEftEjNn44ExoZ3FmOCOJJoC14NlZP2n64ME+tbssCjzn/OjEeG12/TAuhPoI14cWWFuFN5BTbjgbq/dqjxMGJz1w/oU+Udm8IZ4tDMAgCdpvdbl7KxA0g6w3v1kq5o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"
    },
    "0e76": function(e, t, a) {
        "use strict";
        a("7b32")
    },
    "17db": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAMAAABmxpNIAAAC9FBMVEUAAAA3SVA1RU4oTVFDQj8/Q0U9R0s+TFI6RUs8QkY4RElIQTxwWEc9RUaCY0xEQD05Ozw/REU5Q0Y9Q0c9R0oyOztXTENIQj1DPDhCQ0I3PEE6QkQ7RUlbTkRpVEVkSjlLRD1WSD5IQj0/Pj05OjlEQj80MTRGQj5AQUE1ODpDQkJBREI5PUE9RUk9Rk2KaE92UDuEdV55blh/YkxAOzlIQDteTkJpVkZfVEY9Ojo6PDxFQ0A2NjdAREQ3Ojw7PT44Ozw8Q0U+QkMzNjk1PD0xNTlpSjl/c1w3NzZuZlVhT0NqXU1kXExSQTZYTEJQSURZT0Y+Ozk6NzYzMjU+Pj82Oj6HbVdNQz51bFpwZ1RhUURCPTtfUEEwLTJSTkgzNjdXUUntxpXOlWnvyJbux5WvflnvyZfPlmnNk2jQl2uufVjtxZTpwJCYXz/sxJPOlGj43qLVmWvSmGqqfVvpwpGxgFr94qXVoHS1hF6selb536PvzJfnvY3QlmnMkmbHkGbnv4/etIXdrX63hmCleVmtfFiYcVT01Z3zzprhuorjt4fgtofhs4THsITNoHXSnG/Lk2fFjmW9imL74KT326Dz0pzrwpHjuovfsILWq37Tp3vJnHLTmGvBkmrJkma8jWbBjGO6h2CpfFqpd1OGZU2VXT6SWz302Z/w05rwz5noz5jiyJPluorcuYrYr4HZpXieimmyg16vflidclSSblN5XUqeZUP21p7yy5bpyZTjwJDUuovluYrOuIjQpHjXonWrmHTFmG7Cl23XnGy/kGmmjGiShGfGjWKXfF6sflqfd1e1fFaXb0+nc05kVEigaUaMWTyFVzz/5af32Z/t0priypXdxZHawo/Wv47ku4zbtorFqH7Nq33aqXmzoHnIoHe/oXOklHKzl3CkkXCZhmm7imOyiWOHemGpg12peVWQa1Kob0uibEppVkh8W0N+UzpLPTXu1Zy7qYG7qX++oHzfqnG3lWGjdVONbFNpVUhdRjdgRTSpDZB8AAAAYXRSTlMAHwoEqWoSByUxF9H9Yf6/llhEPDgN9NnYfUlBLvz59+nm4uHJxMS4paSXjn5SG/79+ff39vTz5uTSvbW0n5yRi3hwbl5T/v389vXu6ujf2djVzbmuZ/z8+vHv7ubIwL65/4y7lgAABbNJREFUWMPtl/VfE3Ecxhk42BglICBgd3d3d3d7sbhb4dzY5gaDbYxO6S5F6ba7u7u7u/UX7yYiuu0O9VeeP+D9+jzPPZ/v975mDWpQg4zIwpJG93Ay/0+KOYXuOG6Mw9BBS9qM/meWFc1x3shOcxgDJ004WLr77sfH/bv8A8XSs9uo4UPbM6ZOuH8zfMelC/kbAjd/2Kdt7fRXqVg72Y7s1H729EWP7rwLv1zwxvus97lNQQpWfKQwuvmwejtypjrMWeY2sPfBm+HbLubnYZS1sXEKFgRwuYBADaYfHUSpD6dJt+Ht3ab2uvd2x6WC87He3t5r18QGblRAMMAFcHG3g2BWK2o9BnJv37r37h0X8wO9cMgar9hNGxUsGB/np8SRYHSfueQJOS8vvZyftxaHeK3xOoe5wgcB6kpQAnJWD6KRloe68II3hsGEuWIBNa5+RyWyOTnTqKRBNX2Uh4Py4hQwDJiQ8tCz9S06kk5lO6nAK3AjDJgWzN15ir+uZ1tLsqzoK8M3AUSCE9LQaj7/jJsHucM7WyACkiBZxkSf8/mnp40iddi497YgkyBucBqTyURP8Pl4WKQOZ4YHcU2QxDvLUAxVnsPHwhpsQcay7rB7C2zcm/9+DIRLzq9+VjGbtFmWXXoVsYyR/CIkATgHZUpkxw4hZa7upJvTGHNopFPiFDSAiaLlEtn+JKWUHa1jOJGGRbM/EOzHEwsAqC4QVqZJZDKZJiMiGOImIlHavsNoFGtzC2KHnW2eZOyJSC4ODb5SN/+EpKSk4gQWttqFCDv6+OsFLdt1bEonWcOlFeUB8ic5cuaD4DooiMViQfo549XIserTZ171/NqvC7FDJ8ZxiT5f9IE/YCAIEocmS9bzsT6caWHvSJxWd/tcLOAAVLM31KD3MMTzj9DI8Y6+auHm4ExWh2E2nySajD3FwJ8kCAOlyOSo/Pm60+NbDqZSrCk/ZW08rNGtHkYkBUMGI+lBAWh5zql168dPbDN8RMdGtXLoZmV0dxjvWYYrDfvtzJDIA1B5TvWpE8eYOt1RbfbqWj1tTTe+O6VbISN13yuRlGn2pyRHqA5xRCJR6qpa7UvPbU0z3qxeRUZQQIK/f2joFR5W17AStq+QDXJAvXxSj9i4Uq2MnlmjplwNUtTADJoFY15hXmGiVKXSg9iimFyXRh7mJtaw1eO0tGRBXYzht9wVFaUn+RxtzqBSTN5gbpWofI8YIFCIFNGDEJWdS2e6lemStrOTpyRwTYPEakQo1JvLqnIda0lU0kbziwln4u0S6vPmaJu1IxgJb4P9/a0wIUqKoYTszNx+nWtTMlH3ltcggBQFZtrNsjUnOUdd7/nBAJcUFdOnE4VmTXTIeLY7iJUdjmMRoUAcVTWxb982VHOCS3XKtiBB0YY4mAAViaM4qswYWR+H7gS3V6kYunrtPIvAoBKskeqpq6PppBwZtzeLDxQEEgwlCKvZvswebahE/zIDr28uOrBFQURC9CBhjN2sxoS3xIDr8N3bG0z64/LU+n6ywTKbtt3MiFG3BIf3GkfBQLwyMZKDg9gq7eShzmZkqPjDDxUso5ywEsSXg4M4sh4tHShk/33TMwoPZ4cJ/uDAYmXoDT0H9EHALF3/FbYWZBe9p32ltLIiXa0Ear8hBAv8Qm5ERvniISEijqaieduuv+pEUNH+q4+/zBTuCuEBkF4YRy0FfwwkEkVLKie3HUGv1+OG1shG9+0Im4OUJIZsL9weEqaWsms4qVFZWrtWg7t61veh5Dx38euX6QjI8RUikQgYVcNZBcZkf27O6GRL+Zunm2OXflVHfPalithsPGX8nkrX5tq42Hd1N+CQwhoPaWZjp8vOUnHAaE22rkfVC5cOXd1pBMcTQWLjRg6Z0ezkyS8vTjZzmTFkxBgPAg7pZBS6x7ixY+aNdXfypFhamf23rCzMGtSgf9B3RZx7zZz8pgMAAAAASUVORK5CYII="
    },
    "1a03": function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"Télécharger l\'application","desc":"Verwenden Sie die Wallet-Adresse, um sich zu registrieren und sich anzumelden, um das Spiel zu spielen"},"common":{"buyDXCT":"Acheter $DXCT","playNow":"joue maintenant"},"home":{"title":"JEU CAT METAVERSE SUR BLOCKCHAIN"},"about":{"title":"À PROPOS DE DNAxCAT","brief1":"DNAxCAT crée un monde numérique pour animaux de compagnie où les joueurs peuvent élever et élever divers chats mignons et se battre côte à côte dans le monde de l\'aventure avec vos chats.","brief2":"DNAxCAT est également une économie dans laquelle la propriété est totalement décidée par les joueurs, permettant aux joueurs de vendre et d\'échanger de manière transparente leurs actifs de jeu en crypto-monnaie.  DNAxCAT mène la tendance de GameFi et « Play To Earn », permettant aux joueurs de gagner en jouant à des jeux."},"characters":{"title":"PERSONNAGES DU JEU","viewMore":"Voir plus","element":"Élément:","force":"Obliger:","bodyParts":"Parties du corps","properties":"Propriétés","skill":"Compétence","meowKing":"Royaume des Miaous","sakuraVill":"Village de Sakura","meowDev":"miaou devildom","vitality":"Vitalité","strength":"Force","defense":"La défense","morale":"Moral","agility":"Agilité"},"features":{"title":"TRAITS","title1":"Jouez 2 Gagnez","brief1":"GRATUIT POUR JOUER, JOUER POUR GAGNER, gagner des jetons en jouant à des jeux puis échanger sur le marché.N","title2":"Convoquer","brief2":"Invoquez des chats courageux par deux chats et vous pouvez prendre les nouveaux chats pour jouer au jeu ou les vendre à d\'autres joueurs.  C\'est à vous.","title3":"Exposition","brief3":"Collectionnez une variété de chats courageux aux formes uniques pour les montrer à vos amis et aux autres joueurs via les plateformes sociales.","title4":"Social","brief4":"Communiquez avec plus de 250,000+ utilisateurs pour acquérir plus de compétences, de stratégies et d\'expérience de jeu.","title5":"expédition","brief5":"Construisez une équipe pour éliminer les ennemis dans le jeu.  Chaque chat a des caractéristiques génétiques, organisez bien votre équipe de chats et gagnez des récompenses avec votre équipe.","title6":"Saison","brief6":"Combattez en mode saison et essayez d\'obtenir un classement élevé pour obtenir plus de récompenses symboliques."},"token":{"title":"JETON DNAxCAT","brief":"DNAxCAT Token (DXCT) est la devise de gouvernance de DNAxCAT Metaverse.  Il sera utilisé pour le commerce, l\'échange et l\'élevage de chats héros dans le jeu."},"friends":{"title":"ÉCONOMIE DES JETONS"},"supporter":{"title":"SUPPORTEUR STRATÉGIQUEm"},"economics":{"title1":"Monnaie du jeu","title2":"Gouvernancec","title3":"Staking","title4":"Jouez 2 Gagnez"}}')
    },
    "21de": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    2398: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAACWCAMAAAB+W6gfAAABF1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8+Pj7///////////88PDz///////////////////////////////////////////9DQ0P///88PDxQUFD///////88PDw8PDw8PDw9PT08PDw9PT09PT08PDxCQkI8PDz///88PDw9PT0+Pj49PT0+Pj7///88PDz///+x6UitAAAAW3RSTlMAFsAhGxOc74gL0QNWRgWT11D7J+zegry6nSkQq6Y1LsnGBseuoGxeDYVmY5Z+c1pMQLGNOTEZCOvMejgk47R2cGlDPBC3jgT1w/nRwV2242FPH/XnpYaAfnNouctZRwAACv5JREFUeNrs2UlqxDAQBdA6lBY6gLBAkjUZT/z73yOYTjqQHtJZhHbBfytjLz9VrpLkEde2ORYbQG8VbInz1pz8iRki6FTiYORFbo8ApryMpjsv9FbedTMueQIQd/dKfKsF7GCY3Kl4Mxy5rL9GWC2QGtM7Id8SYKs80xOQjNBJmSOf/uS7RRmFTmwssEYeqAHZCZ2aywhV7vEDMAid3pGTlxs+I7B9qjAGZH8nV8vpRQljb3tlRWB+apiAevOG/VOR8Ue9dcv5RZcBtsu3hCykSkaSq4rC/U8ZV1Cvz5Y/QH1GWCcXK5KQOgnrtQC5QShkvkpwZwHqlLDLIaIJKdQQPyuR97cq+cu/b+AOr9UlusgRRiuDKOIwsYMq5Sc4aTxF0yujyYZFSKkFm8w8RtNrxMwZRjODKAVdSKmOIha8SVLLwUoAtwi1PIIAQmoBDFC1fwnwgz276U0UjMIwfFCQIFaRgkRR2+IXNqWKRIkfqG3TxO67as7//x0Ddtq08kKcoSQzybk2blwot5r3Ed+v1z1PEICcooAk54DVqiBw3GSCKIq7XbUK5CsKSHIMKMu2zR25rihiSFHqdVkG8oECktwCShJ3JAiWBcDzsxkeGcZmA+Qd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"
    },
    "24df": function(e, t, a) {
        "use strict";
        a("8614")
    },
    "2c87": function(e, t, a) {
        "use strict";
        a("bc20")
    },
    "2dc7": function(e, t, a) {
        e.exports = a.p + "img/icon-economics-2.a267f3af.png"
    },
    "2fb1": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "327d": function(e, t, a) {},
    3597: function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"Tải ứng dụng","desc":"Sử dụng địa chỉ ví để đăng ký và đăng nhập vào trò chơi"},"common":{"buyDXCT":"Mua $DXCT","playNow":"Chơi ngay"},"home":{"title":"Thế giới ảo Metaverse của Mèo trên Blockchain"},"about":{"title":"Về DNAxCAT","brief1":"DNAxCAT tạo ra các bạn mèo trong thế giới kỹ thuật số nơi mà người chơi có thể nuôi dưỡng ra rất nhiều mèo dễ thương và kề vai sát cánh với các chú mèo trong hành trình thám hiểm thế giới","brief2":"DNAxCAT đồng thời cũng là nền kinh tế mà ở đó quyền sở hữu được quyết định bởi người chơi, cho phép người chơi có thể buôn bán và giao dịch các tài sản trong game sang tiền kỹ thuật số. DNAxCAT dẫn đầu xu hướng GameFi và Chơi để kiếm tiền, cho phép người chơi có thể kiếm tiền bằng việc tham gia trò chơi."},"characters":{"title":"CÁC NHÂN VẬT TRONG TRÒ CHƠI","viewMore":"Xem thêm","element":"Hệ","force":"Năng lực","bodyParts":"Thành phần cơ thể","properties":"Tính trạng","skill":"Kỹ năng","meowKing":"Vương quốc Meow","sakuraVill":"Làng Sakura","meowDev":"Vương quốc Meow","vitality":"Thể lực","strength":"Sức mạnh","defense":"Phòng thủ","morale":"Tinh thần","agility":"Tốc độ"},"features":{"title":"TÍNH NĂNG","title1":"Chơi để kiếm tiền","brief1":"CHƠI MIỄN PHÍ, CHƠI ĐỂ KIẾM TIỀN, kiếm token bằng cách chơi game và sau đó giao dịch trên thị trường","title2":"Triệu tập","brief2":"Triệu tập các mèo brave bằng hai chú mèo và bạn có thể nhận những chú mèo mới để chơi trò chơi hoặc bán chúng cho các người chơi khác. Điều đó hoàn toàn phụ thuộc vào bạn.","title3":"Triển lãm","brief3":"Thu thập nhiều loại mèo chiến binh để giới thiệu chúng cho bạn bè và người chơi khác thông qua các trang mạng xã hội","title4":"Xã hội","brief4":"Giao tiếp với nhiều hơn 250 ngàn người chơi để hiểu hơn về các kỹ năng trong trò chơi, chiến lược và kinh nghiệm khi chơi","title5":"Expedition","brief5":"Xây dựng một đội hình để tiêu diệt kẻ thù trong trò chơi. Mỗi con mèo đều có các đặc tính được di truyền khác nhau, hãy sắp xếp chúng tốt trong đội hình và bạn sẽ chiến thắng phần thưởng cho đội hình của bạn","title6":"Mùa giải","brief6":"Chiến đấu trong chế độ mùa giải và cố gắng để đạt thứ hạng cao để kiếm thêm nhiều token hơn"},"token":{"title":"DNAxCAT TOKEN","brief":"DNAxCAT TOKEN (DXCT) là đồng tiền quản trị trong vũ trụ DNAxCAT. Nó được dùng cho giao dịch, trao đổi và nuôi dưỡng các chiến binh mèo trong trò chơi"},"friends":{"title":"NỀN KINH TẾ TOKEN"},"supporter":{"title":"CHIẾN LƯỢC HỖ TRỢ"},"economics":{"title1":"Đồng tiền trong game","title2":"Quản trị","title3":"Khóa token ","title4":"Play 2 Earn"}}')
    },
    "3bec": function(e, t, a) {
        e.exports = a.p + "img/token-model.6e6f50ec.png"
    },
    4019: function(e, t, a) {
        "use strict";
        a("a899")
    },
    "430c": function(e, t, a) {
        e.exports = a.p + "img/icon-social-discord.32f64dd2.svg"
    },
    4310: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAAXNSR0IArs4c6QAABN9JREFUSEutll2IVVUUx39rn3vvzB1vjo6JaZewICyyHioqKYoeog8YkiIxEnorCyoKoiLCD1SS8CEiyJGIiqiXigKJgooQ6iHtw0woooLxo8acaZz7cT723ivWuVdpCm0eOnDY995z9/rt//qvvfYR5nipPjeP1D2hTm8T5VUGZnaKbMrnOB2Zyx9VN1RIG9dpZfh1wTXVTx+U7om7WbjpOxF0LjHmBprZfrFWz9ouAzeOkneh2EPMJ15yyjZZtHX8fwFpZ3szqn/KuSUPanID5PshPwCkmUa/0aWdXdJ88fh/wc6oSHXDIO3qetBtaK0ewxD4NoQOznWJ6idcCA9xOH1XrhwrzgQ7Lch88VP51Ull4C2BZswE3BJgPmRHwR/C1QqIYR+EdSwd+1GEeDrYLJAqQndLk8Jfi2NUQ7hJlMWxUIgNpHYRMATZIbRt6WvhagFV/7NovhvvPiDEL2XFm3/8E1iCtLV1Cfrn9Uj9dqJbhcgFSIQ8EnMPoQaVpUiyDKIHP422foTiGGiGq3moKdEXwUX/Qwzhk5h136m4wW/kst1TxhCd3vKgJskTUrvkPKrnQ/cA2vke9bYCB3EQ3DC4ESRGCN3SI80mIZ2A4gQUKVAgFY/UgGoAX4DEb4nhYS79bI/E6Y0zUlvWoLoaYpfY+gjy34EFIA1gsAeIBYQWeAOlqBWF70DRhrwFWQcJGYQcSSI0FGx6WnzFT82rRKee2YHIYxoH0SJFfIYmTSRpQjRv+sF9Fw0WPC1BFB2IGfgMCSmSp5C1ochhIMAwkFiedT3v3fqK6PijdR2svi3VeGvseCQXVOulJ7g6UrRRC6794CdB3hTk5cJKeJaBwVyEBX01Po7x/t4H2Ij2iuHwIytiJXzslHNjNyAZKHWoLirTVoJMhaXK0lOq6CDmg88hzyCzxRTQEBjBimYfXlfLNfsPlcVwsgz90fvuTWCXZqGq3QCZPa1DUu/7k5XpMh/EgpdwGwtrElAUME9hYZmySUTv5JcDe2QNYRZIj4wO4Ud2ILo+tgqkY0ocVA1kVWSAnoclwLyI/bFr5R1hRKCuiobHabgXZOXBU939lKJys/5w13Ktug9F9cI4aTkXSGqI9spVrOJMTSigMKCNBeShV2HnOFD9jOn2HXLLocm/b9rZneHI6JDOJG9IIqvjRIbkESRBbFOVfpg/J0H2vf97EWC+wDmJOf48eXxSbvzVNtepazZo7+iQNvQ1cdzJbymYV86MNUV904N1Crv7oMKD3QsTWJqAhB3MHH5abitdPh3oiiGGzn4F0TUcTaFt7SH00mPBLaBtjfJzQdk+vC3Cw4iDZaWi7XQnNvw3aGD4ZSSu5XAX2gYIvcAGTIKtGDIPHVPYV2bPF1VgqbM63kY+tfnMoPFVdY67XSTcw3gXOr7Xt6oK1QgD5pkp9DCTQ6uAVtaDmqIlFVO0mWZrq6xk1vvEbI8+X1Wn7seouHVMpWA9zsrWINErhZ8klCffAiTOL1PXDtDOoKIwqNZIN3Aif1bWnAn06fJBFow8i4uPkFmavOLDEUK0w20PoXiP2DoGLCckd0FYRQiXgx9Go1Wm4niY8bhT7mfWifvvg++LS1dAGMPFKsG/Tj3sJv5yRK6cPbFsXZ8ubtDuLsela4lhLejXVHlMbuZfLyx/Adlw9DQ/X1fEAAAAAElFTkSuQmCC"
    },
    "453b": function(e, t, a) {
        "use strict";
        a("662f")
    },
    "4d7d": function(e, t, a) {
        "use strict";
        a("931d")
    },
    "4dec": function(e, t, a) {
        e.exports = a.p + "img/features-6.7c716bbd.png"
    },
    "537a": function(e, t, a) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("cadf"),
        a("551c"),
        a("f751"),
        a("097d"),
        a("54ba");
        var i = a("2b0e")
          , n = a("fe3c")
          , o = a.n(n)
          , r = a("e37d")
          , l = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                attrs: {
                    id: "app"
                }
            }, [a("header-widget"), a("router-view"), a("footer-widget"), a("header-aside-menu"), e.$root.showDownloadDialog ? a("download-app-dialog", {
                on: {
                    onClose: function() {
                        e.$root.showDownloadDialog = 0
                    }
                }
            }) : e._e()], 1)
        }
          , s = []
          , c = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "header-widget"
            }, [a("div", {
                staticClass: "header-inner"
            }, [a("router-link", {
                staticClass: "logo",
                attrs: {
                    to: "/"
                }
            }, [a("h1", {
                staticClass: "logo-text"
            }, [e._v("DNAxCAT")])]), a("div", {
                staticClass: "menus"
            }, e._l(e.menus, (function(t, i) {
                return a("div", {
                    key: i,
                    staticClass: "menu-item"
                }, [a("normal-link", {
                    attrs: {
                        customEvent: t.customEvent,
                        path: t.path,
                        url: t.url,
                        newTab: t.newTab
                    },
                    on: {
                        onCustomEvent: e.onCustomEvent
                    }
                }, [e._v("\n          " + e._s(t.title)), t.arrow ? a("span", {
                    class: "item-arrow item-arrow-" + t.arrow
                }) : e._e()])], 1)
            }
            )), 0), a("div", {
                staticClass: "space"
            }), a("div", {
                staticClass: "entrys"
            }, [e._m(0), a("div", {
                staticClass: "entry-item"
            }, [a("v-popover", {
                attrs: {
                    trigger: "hover click",
                    placement: "top-end",
                    offset: "-4"
                }
            }, [a("a", {
                staticClass: "item-locale",
                attrs: {
                    href: "javascript:;"
                }
            }, [e._v(e._s(e.currentLocale.value))]), a("div", {
                staticClass: "locale-list",
                attrs: {
                    slot: "popover"
                },
                slot: "popover"
            }, e._l(e.languageList, (function(t, i) {
                return a("a", {
                    directives: [{
                        name: "close-popover",
                        rawName: "v-close-popover"
                    }],
                    key: i,
                    class: "locale-item" + (e.currentLocale.key === t.key ? " selected" : ""),
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(a) {
                            return e.changeLocale(t.key)
                        }
                    }
                }, [a("div", {
                    attrs: {
                        classs: "title"
                    }
                }, [e._v(e._s(t.value))])])
            }
            )), 0)])], 1), a("div", {
                staticClass: "entry-item entry-item-menu"
            }, [a("a", {
                staticClass: "menu-icon",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: e.showAsideMenu
                }
            }, [a("svg", {
                attrs: {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                attrs: {
                    fill: "#fff",
                    d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                }
            })])])])])], 1)])
        }
          , d = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "entry-item entry-item-wallet"
            }, [a("a", {
                staticClass: "common-button button-primary button-42",
                attrs: {
                    target: "_blank",
                    href: "https://market.dnaxcat.io/wallet/nft"
                }
            }, [e._v("My Cat")])])
        }
        ];
        a("28a5");
        function m(e, t, a, i, n) {
            if ("undefined" !== typeof document) {
                var o = new Date
                  , r = ""
                  , l = "";
                o.setDate(o.getDate() + a),
                n && (r = ";domain=".concat(n)),
                i && (l = ";path=".concat(i)),
                document.cookie = "".concat(e, "=").concat(escape(t)).concat(null == a ? "" : ";expires=".concat(o.toGMTString())).concat(l).concat(r)
            }
        }
        function u(e, t) {
            if (!t && "undefined" === typeof document)
                return "";
            if (t = t || document.cookie,
            !t)
                return "";
            var a = t.indexOf("".concat(e, "="));
            if (a < 0)
                return "";
            a = a + e.length + 1;
            var i = t.indexOf(";", a);
            return -1 === i && (i = t.length),
            unescape(t.substring(a, i))
        }
        var g = [{
            value: "한국어",
            key: "korean"
        }, {
            value: "English",
            key: "en"
        }, {
            value: "日本語",
            key: "janpanese"
        }, {
            value: "Español",
            key: "spanish"
        }, {
            value: "Türkçe",
            key: "turkish"
        }, {
            value: "Indonesia",
            key: "indonesian"
        }, {
            value: "ViệtName",
            key: "vietnamnese"
        }, {
            value: "हिंदी",
            key: "india"
        }, {
            value: "বাংলাদেশ",
            key: "bangladesh"
        }, {
            value: "Pilipino",
            key: "filipino"
        }, {
            value: "Deutsch",
            key: "german"
        }, {
            value: "Français",
            key: "french"
        }, {
            value: "Português",
            key: "portuguese"
        }, {
            value: "русский язык",
            key: "russian"
        }, {
            value: "繁體中文",
            key: "hk"
        }, {
            value: "Italiano",
            key: "italian"
        }]
          , f = function() {
            var e = (navigator.language || navigator.browserLanguage || "").toLowerCase();
            return e.indexOf("ko") >= 0 ? "korean" : "en"
        }();
        function p() {
            var e = u("lang")
              , t = g.filter((function(t) {
                return t.key === e
            }
            ));
            return t.length > 0 ? t[0].key : f
        }
        function h(e) {
            m("lang", e, 365, "/", ".".concat(window.location.hostname.split(".").slice(-2).join(".")))
        }
        var A = {
            data: function() {
                return {
                    flagShowAside: !1
                }
            },
            created: function() {
                var e = this;
                this.eventBus.$on("expandHeaderAsideMenu", (function() {
                    e.flagShowAside = !0
                }
                ))
            },
            mounted: function() {},
            computed: {
                menus: function() {
                    return [{
                        title: "Home",
                        path: "/"
                    }, {
                        title: "Play Now",
                        customEvent: "play",
                        arrow: "new"
                    }, {
                        title: "Marketplace",
                        url: "https://market.dnaxcat.io",
                        newTab: !0,
                        arrow: "hot"
                    }, {
                        title: "Farm",
                        url: "https://yooshi.io/farms",
                        newTab: !0
                    }, {
                        title: "Help Center",
                        url: "https://dnaxcat.zendesk.com/hc/en-us/requests/new",
                        newTab: !0
                    }, {
                        title: "Learn More",
                        url: "http://docs.v2.dnaxcat.io",
                        newTab: !0
                    }]
                },
                currentLocale: function() {
                    var e = this;
                    return g.filter((function(t) {
                        return t.key === e.$i18n.locale
                    }
                    ))[0]
                },
                languageList: function() {
                    return g
                }
            },
            methods: {
                onAsideClose: function() {
                    this.flagShowAside = !1
                },
                onFoldTap: function() {
                    this.$refs.asideView && this.$refs.asideView.onFoldTap()
                },
                showAsideMenu: function() {
                    this.eventBus.$emit("expandHeaderAsideMenu")
                },
                changeLocale: function(e) {
                    h(e),
                    this.$i18n.locale = e
                },
                onCustomEvent: function(e) {
                    "play" === e && (this.$root.showDownloadDialog = 1)
                }
            }
        }
          , k = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.path ? a("router-link", {
                attrs: {
                    to: e.path
                }
            }, [e._t("default")], 2) : e.customEvent ? a("a", {
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: function(t) {
                        return e.$emit("onCustomEvent", e.customEvent)
                    }
                }
            }, [e._t("default")], 2) : a("a", {
                style: e.url ? "" : "cursor: default",
                attrs: {
                    href: e.url ? e.url : "javascript:;",
                    target: e.newTab && e.url ? "_blank" : ""
                }
            }, [e._t("default")], 2)
        }
          , b = []
          , v = {
            props: {
                url: {
                    type: String
                },
                path: {
                    type: String
                },
                newTab: {
                    type: Boolean,
                    default: !1
                },
                customEvent: {
                    type: String
                }
            }
        }
          , y = v
          , C = a("2877")
          , w = Object(C["a"])(y, k, b, !1, null, null, null)
          , T = w.exports
          , x = {
            mixins: [A],
            components: {
                NormalLink: T
            }
        }
          , D = x
          , E = (a("4019"),
        Object(C["a"])(D, c, d, !1, null, "63e7356d", null))
          , S = E.exports
          , q = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e.flagShowAside ? a("common-aside-view", {
                ref: "asideView",
                attrs: {
                    contentStyle: e.contentStyle,
                    aside: "right"
                },
                on: {
                    onClose: e.onAsideClose
                }
            }, [a("a", {
                staticClass: "button-close"
            }, [a("span", {
                staticClass: "common-close",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: e.onFoldTap
                }
            })]), a("div", {
                staticClass: "menus"
            }, e._l(e.menus, (function(t, i) {
                return a("div", {
                    key: i,
                    staticClass: "menu-item"
                }, [a("normal-link", {
                    attrs: {
                        customEvent: t.customEvent,
                        path: t.path,
                        url: t.url,
                        newTab: t.newTab
                    },
                    on: {
                        onCustomEvent: e.onCustomEvent
                    }
                }, [e._v("\n          " + e._s(t.title)), t.arrow ? a("span", {
                    class: "item-arrow item-arrow-" + t.arrow
                }) : e._e()])], 1)
            }
            )), 0), a("div", {
                staticClass: "buttons"
            }, [a("a", {
                staticClass: "common-button button-primary button-42",
                attrs: {
                    href: "https://market.dnaxcat.io/wallet/nft"
                }
            }, [e._v("My Cat")])])]) : e._e()], 1)
        }
          , j = []
          , _ = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: "common-aside-widget common-aside-" + e.aside + " " + (e.showAnimate ? " animate-show" : ""),
                on: {
                    click: e.onFoldTap
                }
            }, [a("div", {
                staticClass: "content-view",
                style: "" + e.contentStyle,
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        function() {}
                        .apply(null, arguments)
                    }
                }
            }, [e._t("default")], 2)])
        }
          , U = []
          , R = {
            data: function() {
                return {
                    showAnimate: !1,
                    flagShow: !1
                }
            },
            props: {
                aside: {
                    type: String,
                    default: "left"
                },
                contentStyle: {
                    type: String,
                    default: ""
                }
            },
            mounted: function() {
                var e = this;
                setTimeout((function() {
                    e.showAnimate = !0
                }
                ), 40)
            },
            methods: {
                onFoldTap: function() {
                    var e = this;
                    this.showAnimate = !1,
                    setTimeout((function() {
                        e.$emit("onClose")
                    }
                    ), 400)
                }
            }
        }
          , N = R
          , B = (a("87ef"),
        Object(C["a"])(N, _, U, !1, null, "44fa15be", null))
          , Q = B.exports
          , O = {
            mixins: [A],
            computed: {
                contentStyle: function() {
                    return "width: 68%"
                }
            },
            components: {
                CommonAsideView: Q,
                NormalLink: T
            }
        }
          , I = O
          , P = (a("0e76"),
        Object(C["a"])(I, q, j, !1, null, "71f54008", null))
          , V = P.exports
          , M = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "footer-widget"
            }, [e._m(0), a("div", {
                staticClass: "copyright"
            }, [e._v("Copyright © " + e._s(e.year) + " DNAxCAT.io All Rights Reserved")])])
        }
          , G = [function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "copyright-box"
            }, [i("div", {
                staticClass: "copyright-left"
            }, [i("div", {
                staticClass: "item-text"
            }, [e._v("Incubated By")]), i("img", {
                attrs: {
                    src: a("d296")
                }
            })])])
        }
        ]
          , z = {
            data: function() {
                return {
                    year: (new Date).getFullYear()
                }
            },
            mounted: function() {},
            components: {},
            methods: {}
        }
          , F = z
          , Y = (a("9f5b"),
        Object(C["a"])(F, M, G, !1, null, "04f9f80a", null))
          , K = Y.exports
          , W = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("base-dialog-view", [a("div", {
                staticClass: "download-dialog"
            }, [a("a", {
                staticClass: "common-close",
                on: {
                    click: function(t) {
                        return e.$emit("onClose")
                    }
                }
            }), a("div", {
                staticClass: "dialog-inner"
            }, [a("div", {
                staticClass: "title"
            }, [e._v(e._s(e.$t("downloadDialog.title")))]), a("div", {
                staticClass: "brief"
            }, [e._v(e._s(e.$t("downloadDialog.desc")))]), a("div", {
                staticClass: "buttons"
            }, [a("a", {
                attrs: {
                    target: "_blank",
                    href: e.apkUrl
                }
            }, [a("span", {
                staticClass: "icon-apk"
            }), e._v("Android (APK)\n        ")])])])])])
        }
          , L = []
          , Z = a("be1b")
          , J = a.n(Z)
          , H = a("66eb")
          , X = a.n(H)
          , $ = a("68b2")
          , ee = a.n($)
          , te = {
            apk: "https://api-server.yooshi.io/service/pkg?type=apk&app_id=2"
        }
          , ae = "https://pancakeswap.finance/swap?outputCurrency=0x5b1baec64af6dc54e6e04349315919129a6d3c23"
          , ie = {
            1: {
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6e27815b8698ea49f35bfdb8b3bd6776.png",
                name: "Water"
            },
            2: {
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/69e7194949c1d89cd94cdbe6b58da853.png",
                name: "Fire"
            },
            3: {
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/96bac0ba0da3f3f0e22d206d520d0fb4.png",
                name: "Thunder"
            },
            4: {
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/d37ca17a749cfe7b127600010aa0d164.png",
                name: "Light"
            },
            5: {
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/fa4900130834ead48da47dbd930d863e.png",
                name: "Dark"
            }
        }
          , ne = {
            5: "#FFD708",
            4: "#C947FF",
            3: "#88ADDB",
            2: "#81E23E",
            1: "#FFFFFF"
        }
          , oe = {
            holi: 1017,
            gostie: 1016,
            mora: 1015,
            nemu: 1014,
            flash: 1013,
            tsuki: 1012,
            flamie: 1011,
            bean: 1010,
            kagura: 1009,
            fishie: 1008,
            sun: 1007,
            kina: 1006,
            baiko: 1005,
            miu: 1004,
            jiao: 1003,
            delay: 1002,
            seiji: 1001,
            kyuzo: 1e3
        }
          , re = [{
            title: "Genesis",
            tagIcon: J.a,
            typeId: 7,
            name: "CAT GENESIS"
        }, {
            title: "Egg",
            tagIcon: X.a,
            typeId: 10,
            name: "CAT EGG"
        }, {
            title: "Brave",
            tagIcon: ee.a,
            typeId: 8,
            name: "CAT BRAVE"
        }]
          , le = re.reduce((function(e, t) {
            return e[t.typeId] = t,
            e
        }
        ), {})
          , se = [{
            force_id: 1,
            color_id: 10,
            gender: 2,
            face_id: 6,
            battle_info: {
                vit: 15,
                str: 30,
                def: 30,
                agi: 10,
                mor: 40
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1e3,
                skill_name: "Dark scythe",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6dfb9927fe659860d8fdeb8577e4bed7.png",
                skill_brief: "Wielding the sickle in hand to attack the enemy's front row, causing 120% damage, and with a 12%  HP steal effect"
            }, {
                pendant_type: 2,
                quality: 5,
                quality_level: 5,
                skill_id: 2e3,
                skill_name: "Everlasting Crown",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/2e6f3b6b557e2d4768bd67bb7192d530.png",
                skill_brief: "When it is on battlefield,reduce the attack of all enemies by 5% "
            }, {
                pendant_type: 3,
                quality: 5,
                quality_level: 5,
                skill_id: 3e3,
                skill_name: "Everlasting Scarf",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/ec977f0bf1dda656ce2c2845c82ec79a.png",
                skill_brief: "Increases the defense for 10%, and can withstand a fatal damage . It can only be triggered for 1 time and the defense bonus will be lost after triggering."
            }, {
                pendant_type: 4,
                quality: 5,
                quality_level: 5,
                skill_id: 4e3,
                skill_name: "King Bowknot",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/ba2f5c612a72eaefefef555ceed859c5.png",
                skill_brief: "After killing the target, it will regain its lost HP for 18%"
            }],
            cat_id: 17,
            name: "Kyuzo",
            force: "Meow Kingdom",
            face: "Careless",
            color: "Dark Red",
            element_id: 5,
            element: "Dark",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/kyuzo.png",
            parts_num: 6,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/7de2a0ec34c13cc88618166dba693289.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f8a547cab5437464eba5e95523f037e5.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/9a9f8a390855b859753e983997bef20a.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/812feda5526fc48b2bceb95278145445.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Neck",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/5c513eac712c7382008aa693dd1db687.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "6",
                item_name: "Tail",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f6802a0e147f58b62c5a7966fbb3a502.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 1,
            color_id: 8,
            gender: 2,
            face_id: 2,
            battle_info: {
                vit: 24.2,
                str: 24.2,
                def: 47.2,
                agi: 13.2,
                mor: 14.2
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1004,
                skill_name: "Lucky pompon",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/3431ef25b71c7311028ff63f6a21568e.png",
                skill_brief: "Pray for the goddess and apply a shield to all your team which is 144% of th attack."
            }, {
                pendant_type: 2,
                quality: 5,
                quality_level: 5,
                skill_id: 2004,
                skill_name: "Lucky headband",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/bafa5ddd72f5120a0b917e2c143a4443.png",
                skill_brief: "At the beginning of the battle, gain a shield with the max HP's 30%. "
            }, {
                pendant_type: 3,
                quality: 5,
                quality_level: 5,
                skill_id: 3004,
                skill_name: "Lucky bowknot",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/eebed10aa5bba4a14a1656fba450ea2f.png",
                skill_brief: "While using the basic attack,  restores the attack* 20% HP to our character with the lowest HP."
            }],
            cat_id: 13,
            name: "Miu",
            force: "Meow Kingdom",
            face: "Dull",
            color: "Golden",
            element_id: 4,
            element: "Light",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/miu.png",
            parts_num: 5,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/1b8a0340f3bf02b9f75f76b2cd89d9f1.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/4e76045d0cbabc79e2f0a8286cc8c2b4.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/7e04bb4fa5745dd39f8ce87f80114217.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f8fc502767087e4b30241aa9d44d2a2d.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Neck",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/39d446048b8184aa52350bc129b50401.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 1,
            color_id: 4,
            gender: 1,
            face_id: 11,
            battle_info: {
                vit: 13.4,
                str: 43.4,
                def: 18.4,
                agi: 28.4,
                mor: 13.4
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1007,
                skill_name: "Blast Gloves",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/a6ab78de864e8214f8a9263d490ef907.png",
                skill_brief: "Use the flame fist to quickly strike the target for many times, causing a total of 216% damage, these attacks completely ignore the shield of the target."
            }, {
                pendant_type: 2,
                quality: 5,
                quality_level: 5,
                skill_id: 2007,
                skill_name: "Blast Earrings",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/9e54f786f86d8d547cc5dba1ef7708c9.png",
                skill_brief: "When causing damage, there is an extra chance of 8.6% to apply burning effect."
            }, {
                pendant_type: 3,
                quality: 5,
                quality_level: 5,
                skill_id: 3007,
                skill_name: "Blast Necklace",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/36107fd3710fde28b15c00f57ebe0a24.png",
                skill_brief: "Get extra 60 energy before each action."
            }],
            cat_id: 10,
            name: "Sun",
            force: "Meow Kingdom",
            face: "Gloomy",
            color: "Henna",
            element_id: 2,
            element: "Fire",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/sun.png",
            parts_num: 5,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/d36c01e535b853c9a9f0baef2ce22b6f.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/01dea33487fb25d099404d06e951067f.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/e31a82a76ac3154a7cfcb037fbe00497.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/024e417059083c2d47d3d74a6251805c.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Neck",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/060e462de36c34c0c79b2daa3dd4cec0.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 1,
            color_id: 2,
            gender: 2,
            face_id: 10,
            battle_info: {
                vit: 43.4,
                str: 23.4,
                def: 33.4,
                agi: 8.4,
                mor: 8.4
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1008,
                skill_name: "Magic Chapter",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/86843e842cf784ef46c033c34bd944e3.png",
                skill_brief: "Summon a water jet to attack the enemy in the front row and cause 108% damage and reduce the target 19%  attack for 2 rounds"
            }, {
                pendant_type: 2,
                quality: 4,
                quality_level: 4,
                skill_id: 2008,
                skill_name: "Starfish Headband",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/c5ac657859f8090a782b82d04f18f527.png",
                skill_brief: "When the damage is critical(CRT) damage, you can restore 5.5% of lost HP."
            }, {
                pendant_type: 4,
                quality: 5,
                quality_level: 5,
                skill_id: 4008,
                skill_name: "Magic Fish",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/cc310a739e89e5646128c20d3cba2e56.png",
                skill_brief: "When attacking the enemy, the fish has a chance of 30% to deal an additional water jet attack on a random 1 target and cause 40% damage."
            }],
            cat_id: 9,
            name: "Fishie",
            force: "Meow Kingdom",
            face: "Brave",
            color: "Cyan",
            element_id: 1,
            element: "Water",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/fishie.png",
            parts_num: 5,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/9cd699a3cb9e0dca25c975cc85ff3b57.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6e40f98aee0545b0cf10a7343fc74883.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6ce4e2b400acf3778909f3058872a805.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/48209a01964443e5c1833cf00c8aeb4e.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "6",
                item_name: "Tail",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/ccea283dba93119866ffab4444365fbd.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 1,
            color_id: 7,
            gender: 1,
            face_id: 1,
            battle_info: {
                vit: 25,
                str: 24,
                def: 40,
                agi: 6,
                mor: 10
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1017,
                skill_name: "Holy Code",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/8e0d9fc33d8be3c45fb6d47252860926.png",
                skill_brief: "Use the Holy Light to heal the unit with the lowest HP and restore its attack * 192% HP."
            }],
            cat_id: 0,
            name: "Holi",
            force: "Meow Kingdom",
            face: "Timid",
            color: "Beige",
            element_id: 4,
            element: "Light",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/holi.png",
            parts_num: 3,
            parts: [{
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/4e76045d0cbabc79e2f0a8286cc8c2b4.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/7e04bb4fa5745dd39f8ce87f80114217.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f8fc502767087e4b30241aa9d44d2a2d.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 3,
            color_id: 6,
            gender: 2,
            face_id: 4,
            battle_info: {
                vit: 25,
                str: 35,
                def: 15,
                agi: 40,
                mor: 10
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1002,
                skill_name: "Thunder Stone",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/d3a04feb7e71820ebe94557d79b5c0fa.png",
                skill_brief: "Summon thunder to attack the enemy's rear units and cause 120% damage, and 30% chance to stun the target."
            }, {
                pendant_type: 2,
                quality: 5,
                quality_level: 5,
                skill_id: 2002,
                skill_name: "Devil Helmet",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/17da5f42ecc1e70f085f45842c8e8985.png",
                skill_brief: "At the beginning of the battle, a random lightning will strike against 1 enemy and cause 120% damage."
            }, {
                pendant_type: 3,
                quality: 5,
                quality_level: 5,
                skill_id: 3002,
                skill_name: "Devil Necklace",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/ec485876035bfd33b9ca4646d5819ee1.png",
                skill_brief: "There is an extra 3.6% chance to stun the target when dealing damage."
            }, {
                pendant_type: 4,
                quality: 5,
                quality_level: 5,
                skill_id: 4002,
                skill_name: "Devil Ribbon",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/2e1648c70bd84347881c8887c1699929.png",
                skill_brief: "When dealing damage to an enemy, it will give yourself a shield of attack * 18% (can not be regained) for 1 rounds."
            }],
            cat_id: 15,
            name: "Delay",
            force: "Meow Devildom",
            face: "Hasty",
            color: "Pink",
            element_id: 3,
            element: "Thunder",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/delay.png",
            parts_num: 6,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/13ba834b73e5c5ca54ae3167c6f35df9.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/25fc09deec9530571a640178ba3943bd.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/847dc7e25a932f952cd031969a9cf26d.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/4461900c24a624e594744cf8d378ce1e.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Neck",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/7f5c735775558609140d05422248d2d2.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "6",
                item_name: "Tail",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/bd82e2e564711b2a9b4978d5f5d1589a.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 3,
            color_id: 10,
            gender: 1,
            face_id: 3,
            battle_info: {
                vit: 14.2,
                str: 29.2,
                def: 29.2,
                agi: 9.2,
                mor: 39.2
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1003,
                skill_name: "Crystal Stone",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f2b097d494649d633c0788edeb95fd45.png",
                skill_brief: "Use the magic crystal to increase its speed, defense and attack by 12% for 2 rounds, and throw the magic crystal to the enemy unit with the lowest HP causing 144% damage, the magic crystal will explode and spread to surrounding units causing 50% splash damage."
            }, {
                pendant_type: 3,
                quality: 5,
                quality_level: 5,
                skill_id: 3003,
                skill_name: "Crystal Bowknot",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/aeaadc542bffa72ccaea7ef691a85f71.png",
                skill_brief: "When on battlefield, increase the energy recovery(RCV) of 14% for all your characters."
            }, {
                pendant_type: 4,
                quality: 5,
                quality_level: 5,
                skill_id: 4003,
                skill_name: "Crystal ribbon",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/1712d66e1bd64aa65672e1a50df1b06d.png",
                skill_brief: "If the special move does not kill the target, it can drain the enemy's 6% energy."
            }],
            cat_id: 14,
            name: "Jiao",
            force: "Meow Devildom",
            face: "Sky",
            color: "Dark Red",
            element_id: 5,
            element: "Dark",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/jiao.png",
            parts_num: 5,
            parts: [{
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f8a547cab5437464eba5e95523f037e5.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/9a9f8a390855b859753e983997bef20a.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/812feda5526fc48b2bceb95278145445.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Neck",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/5c513eac712c7382008aa693dd1db687.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "6",
                item_name: "Tail",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f6802a0e147f58b62c5a7966fbb3a502.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 3,
            color_id: 6,
            gender: 1,
            face_id: 1,
            battle_info: {
                vit: 23.4,
                str: 33.4,
                def: 13.4,
                agi: 38.4,
                mor: 8.4
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1006,
                skill_name: "Charming Umbrella",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/9ae2f397e8b0f9dd47ffc0bbabf3021c.png",
                skill_brief: "Add an additional 36% dodge rate for all your characters for 2 rounds."
            }, {
                pendant_type: 2,
                quality: 4,
                quality_level: 4,
                skill_id: 2006,
                skill_name: "Charming Sunhat",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/b018f7aea3acf415351f53140dba7b9e.png",
                skill_brief: "Confused the enemy to get an extra 11.5% dodge rate."
            }, {
                pendant_type: 3,
                quality: 5,
                quality_level: 5,
                skill_id: 3006,
                skill_name: "Pearl Necklace",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/24556427f8920c4a51e43d96a5017faa.png",
                skill_brief: "Basic attacks can get 8.6% HP steal effect."
            }],
            cat_id: 11,
            name: "Kina",
            force: "Meow Devildom",
            face: "Timid",
            color: "Pink",
            element_id: 3,
            element: "Thunder",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/kina.png",
            parts_num: 5,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/13ba834b73e5c5ca54ae3167c6f35df9.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/25fc09deec9530571a640178ba3943bd.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/847dc7e25a932f952cd031969a9cf26d.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/4461900c24a624e594744cf8d378ce1e.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Neck",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/7f5c735775558609140d05422248d2d2.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 3,
            color_id: 1,
            gender: 2,
            face_id: 8,
            battle_info: {
                vit: 42.6,
                str: 22.6,
                def: 32.6,
                agi: 7.6,
                mor: 7.6
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1010,
                skill_name: "Rampant Bean",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/e527e4154265cd4bcd72b204b0fe0e6b.png",
                skill_brief: "Throw pea vines to 2 enemies randomly and entangle them for 1 round, causing 72% damage. And make them unmoveable."
            }, {
                pendant_type: 2,
                quality: 5,
                quality_level: 5,
                skill_id: 2010,
                skill_name: "Binding Vine",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/1feef6cca26b886511ce3472aead65a5.png",
                skill_brief: "The seed will be parasitic on the target during the Special Move which steal 1.8% of the target current HP.(The recovery value does not exceed Max HP's 5%)."
            }],
            cat_id: 7,
            name: "Bean",
            force: "Meow Devildom",
            face: "Serious",
            color: "Blue",
            element_id: 1,
            element: "Water",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/bean.png",
            parts_num: 4,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/9cd699a3cb9e0dca25c975cc85ff3b57.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6e40f98aee0545b0cf10a7343fc74883.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6ce4e2b400acf3778909f3058872a805.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/48209a01964443e5c1833cf00c8aeb4e.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 3,
            color_id: 3,
            gender: 1,
            face_id: 7,
            battle_info: {
                vit: 12.6,
                str: 42.6,
                def: 17.6,
                agi: 27.6,
                mor: 12.6
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1011,
                skill_name: "Fire Elf",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/57e0d4ce091fabc13e71adb692c36c5e.png",
                skill_brief: "Summon flame elf to fly to the target and explode, causing 96% damage to the target and its surrounding units. Additional burning effect lasts for 2 rounds."
            }, {
                pendant_type: 2,
                quality: 5,
                quality_level: 5,
                skill_id: 2011,
                skill_name: "Pupil Cap",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/4ebccb1bf80bb3a059311a50e0797543.png",
                skill_brief: "An extra 4.8% of the damage will be added for the basic attack, the lower the target's HP, the higher the additional damage is."
            }],
            cat_id: 6,
            name: "Flamie",
            force: "Meow Devildom",
            face: "Out-Going",
            color: "Orange",
            element_id: 2,
            element: "Fire",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/flamie.png",
            parts_num: 4,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/d36c01e535b853c9a9f0baef2ce22b6f.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/01dea33487fb25d099404d06e951067f.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/e31a82a76ac3154a7cfcb037fbe00497.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/024e417059083c2d47d3d74a6251805c.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 3,
            color_id: 1,
            gender: 1,
            face_id: 5,
            battle_info: {
                vit: 41.8,
                str: 21.8,
                def: 31.8,
                agi: 6.8,
                mor: 6.8
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1013,
                skill_name: "Crystal Pick",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/aa2724e2d70a8f6da60d7aed977417ca.png",
                skill_brief: "Launch a fierce combo against the enemy, causing a total of 192% damage, and have a 50% chance to stun the target."
            }, {
                pendant_type: 2,
                quality: 5,
                quality_level: 5,
                skill_id: 2013,
                skill_name: "Crystal Helmet",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/719c96e1bba37e4274ebe24201f1d396.png",
                skill_brief: "Decrease 36% of the probability of being Critical Hit (CRT) by others."
            }],
            cat_id: 4,
            name: "Flash",
            force: "Meow Devildom",
            face: "Lazy",
            color: "Blue",
            element_id: 1,
            element: "Water",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/flash.png",
            parts_num: 4,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/9cd699a3cb9e0dca25c975cc85ff3b57.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6e40f98aee0545b0cf10a7343fc74883.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6ce4e2b400acf3778909f3058872a805.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/48209a01964443e5c1833cf00c8aeb4e.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 3,
            color_id: 5,
            gender: 1,
            face_id: 3,
            battle_info: {
                vit: 21,
                str: 31,
                def: 11,
                agi: 36,
                mor: 6
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1015,
                skill_name: "Lavender Staff",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6ae795a21a4b51debbecc4eb36235a15.png",
                skill_brief: "Attacking the front row of the enemies causes 72% of attack damage and reduces the target 36% defense."
            }],
            cat_id: 2,
            name: "Mora",
            force: "Meow Devildom",
            face: "Sky",
            color: "Pink",
            element_id: 3,
            element: "Thunder",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/mora.png",
            parts_num: 3,
            parts: [{
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/25fc09deec9530571a640178ba3943bd.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/847dc7e25a932f952cd031969a9cf26d.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/4461900c24a624e594744cf8d378ce1e.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 3,
            color_id: 9,
            gender: 2,
            face_id: 2,
            battle_info: {
                vit: 11,
                str: 26,
                def: 26,
                agi: 6,
                mor: 36
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1016,
                skill_name: "Ghost Touch",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/18a3d6539098748e295d61dadf61ba03.png",
                skill_brief: "Cursing random targets in the back row of the enemies for 2 rounds. During the cursed period, they cannot use special move, and its defense and morale are reduced by 24%."
            }],
            cat_id: 1,
            name: "Gostie",
            force: "Meow Devildom",
            face: "Dull",
            color: "Gray Black",
            element_id: 5,
            element: "Dark",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/gostie.png",
            parts_num: 3,
            parts: [{
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f8a547cab5437464eba5e95523f037e5.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/9a9f8a390855b859753e983997bef20a.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/812feda5526fc48b2bceb95278145445.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 2,
            color_id: 8,
            gender: 1,
            face_id: 5,
            battle_info: {
                vit: 25,
                str: 25,
                def: 50,
                agi: 10,
                mor: 15
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1001,
                skill_name: "Heaven Sword",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/6c775dc7c1dbfa33e949a4d799389c1e.png",
                skill_brief: "Heaven swords are divided into sword blades to form a magic circle to attack the enemy, causing a total of  240% damage ."
            }, {
                pendant_type: 2,
                quality: 5,
                quality_level: 5,
                skill_id: 2001,
                skill_name: "Omen of Dawn",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/45f1ddfbe75c7c6c7f4d59fac1de00c0.png",
                skill_brief: "When any unit dies, it will absorb the 26% of escaped energy, and impose a shield with 12% of max HP on itself."
            }, {
                pendant_type: 3,
                quality: 5,
                quality_level: 5,
                skill_id: 3001,
                skill_name: "Ends of Dusk",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/bb790c6957fba84c757422bd08950088.png",
                skill_brief: "There is 6% chance to seal the enemy’s special move for 1 round when causing damage."
            }, {
                pendant_type: 4,
                quality: 5,
                quality_level: 5,
                skill_id: 4001,
                skill_name: "Rune of tale",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/bddd8a83d743de51f29af2c41b2b20b7.png",
                skill_brief: "When using the special move, there is 18% chance to give the target a vulnerability effect (vulnerability: increase received damage by 20% for 1 round"
            }],
            cat_id: 16,
            name: "Seiji",
            force: "Sakura Village",
            face: "Lazy",
            color: "Golden",
            element_id: 4,
            element: "Light",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/seiji.png",
            parts_num: 6,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/1b8a0340f3bf02b9f75f76b2cd89d9f1.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/4e76045d0cbabc79e2f0a8286cc8c2b4.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/7e04bb4fa5745dd39f8ce87f80114217.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f8fc502767087e4b30241aa9d44d2a2d.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Neck",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/39d446048b8184aa52350bc129b50401.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "6",
                item_name: "Tail",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/01331566745863686c94282d0d4366f3.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 2,
            color_id: 8,
            gender: 1,
            face_id: 1,
            battle_info: {
                vit: 24.2,
                str: 24.2,
                def: 49.2,
                agi: 9.2,
                mor: 14.2
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1005,
                skill_name: "Key of Star ",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/d93347e311b8392220f8d32e63867be9.png",
                skill_brief: "Bless our unit with the lowest HP to increase its attack and defense by 30% , lasting for 2 rounds, and can recover 30% lost HP before each action."
            }, {
                pendant_type: 3,
                quality: 5,
                quality_level: 5,
                skill_id: 3005,
                skill_name: "Healing Bell",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/a1e47f25618c3c56922a2263272aa4ef.png",
                skill_brief: "During the action, if HP is lower than30%,you will gain a shield with the max HP's  52% until the end of the battle, it will only be triggered for 1 times."
            }, {
                pendant_type: 4,
                quality: 5,
                quality_level: 5,
                skill_id: 4005,
                skill_name: "Blessing Star",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/50464c05a61257d44b02290e79e408ea.png",
                skill_brief: "During the basic attack, there is 30% of chance to apply our character with the lowest HP with attack * 24% shield, lasting 1 round."
            }],
            cat_id: 12,
            name: "Baiko",
            force: "Sakura Village",
            face: "Timid",
            color: "Golden",
            element_id: 4,
            element: "Light",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/baiko.png",
            parts_num: 5,
            parts: [{
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/4e76045d0cbabc79e2f0a8286cc8c2b4.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/7e04bb4fa5745dd39f8ce87f80114217.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f8fc502767087e4b30241aa9d44d2a2d.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Neck",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/39d446048b8184aa52350bc129b50401.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "6",
                item_name: "Tail",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/01331566745863686c94282d0d4366f3.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 2,
            color_id: 5,
            gender: 1,
            face_id: 9,
            battle_info: {
                vit: 22.6,
                str: 32.6,
                def: 12.6,
                agi: 37.6,
                mor: 7.6
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1009,
                skill_name: "Punishing Thunder",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/37854c9686a9cef5f8429db170bfe074.png",
                skill_brief: "Summon Sakura Falling Thunder to cause 180% damage to the enemy unit with the highest attack and Stun him."
            }, {
                pendant_type: 2,
                quality: 5,
                quality_level: 5,
                skill_id: 2009,
                skill_name: "Defending Thunder",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/3de249efc8eebe448f1c7a37756264dc.png",
                skill_brief: "Each time when enemy dies, you will absorb his soul to increase your attack by 1.8% ."
            }],
            cat_id: 8,
            name: "Kagura",
            force: "Sakura Village",
            face: "Naughty",
            color: "Pink",
            element_id: 3,
            element: "Thunder",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/kagura.png",
            parts_num: 4,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/13ba834b73e5c5ca54ae3167c6f35df9.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/25fc09deec9530571a640178ba3943bd.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/847dc7e25a932f952cd031969a9cf26d.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/4461900c24a624e594744cf8d378ce1e.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 2,
            color_id: 3,
            gender: 2,
            face_id: 6,
            battle_info: {
                vit: 11.8,
                str: 41.8,
                def: 16.8,
                agi: 26.8,
                mor: 11.8
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1012,
                skill_name: "Sigh of Goddess",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/034bf116811b34b2b5f6284a82398cd8.png",
                skill_brief: "Increases attack by 24% for all your characters for 1 round."
            }, {
                pendant_type: 2,
                quality: 4,
                quality_level: 4,
                skill_id: 2012,
                skill_name: "Starry Night",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/7c4f435823a2755188d99bc460090d09.png",
                skill_brief: "Increase the Attack (ATK) of your team by 22% for 1 round after death. "
            }],
            cat_id: 5,
            name: "Tsuki",
            force: "Sakura Village",
            face: "Careless",
            color: "Orange",
            element_id: 2,
            element: "Fire",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/tsuki.png",
            parts_num: 4,
            parts: [{
                item_no: "1",
                item_name: "Head",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/d36c01e535b853c9a9f0baef2ce22b6f.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/01dea33487fb25d099404d06e951067f.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/e31a82a76ac3154a7cfcb037fbe00497.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/024e417059083c2d47d3d74a6251805c.png",
                item_code: "",
                offline: "0"
            }]
        }, {
            force_id: 2,
            color_id: 9,
            gender: 2,
            face_id: 4,
            battle_info: {
                vit: 11.8,
                str: 26.8,
                def: 26.8,
                agi: 6.8,
                mor: 36.8
            },
            skills: [{
                pendant_type: 1,
                quality: 5,
                quality_level: 5,
                skill_id: 1014,
                skill_name: "Shuriken",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/7e1ac104f8ed0b53a9a206b3debfeff1.png",
                skill_brief: "Launch a large number of Shuriken to attack the enemy and cause a total of 216% damage, and bleeding effect for 1 rounds."
            }, {
                pendant_type: 3,
                quality: 4,
                quality_level: 4,
                skill_id: 3014,
                skill_name: "Ninja Mask",
                icon: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/d758fbc9bf440797706532c4b32149fb.png",
                skill_brief: "A one-time extra 7.8% Critical Hit (CRT) Rate will be applied which is stackable, the effect will disappear after the attack."
            }],
            cat_id: 3,
            name: "Nemu",
            force: "Sakura Village",
            face: "Hasty",
            color: "Gray Black",
            element_id: 5,
            element: "Dark",
            uri: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/cat_genesis_v2/nemu.png",
            parts_num: 4,
            parts: [{
                item_no: "2",
                item_name: "Color",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/f8a547cab5437464eba5e95523f037e5.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "3",
                item_name: "Skin",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/9a9f8a390855b859753e983997bef20a.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "4",
                item_name: "Weapon",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/812feda5526fc48b2bceb95278145445.png",
                item_code: "",
                offline: "0"
            }, {
                item_no: "5",
                item_name: "Neck",
                item_image: "https://d1vyp5kjqdxn2l.cloudfront.net/cdnstatic/img/5c513eac712c7382008aa693dd1db687.png",
                item_code: "",
                offline: "0"
            }]
        }]
          , ce = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: "canvas " + (e.animated ? " animated" : "")
            }, [a("div", {
                staticClass: "container-1"
            }, [e._t("default")], 2), e._t("slot-root")], 2)
        }
          , de = []
          , me = {
            data: function() {
                return {
                    animated: !1
                }
            },
            props: {},
            mounted: function() {
                var e = this;
                setTimeout((function() {
                    e.animated = !0
                }
                ), 60)
            },
            methods: {}
        }
          , ue = me
          , ge = (a("9d9d"),
        Object(C["a"])(ue, ce, de, !1, null, "030fdd02", null))
          , fe = ge.exports
          , pe = {
            computed: {
                apkUrl: function() {
                    return te.apk
                }
            },
            methods: {
                downloadApp: function(e) {
                    "apk" === e && window.open(te.apk)
                }
            },
            components: {
                BaseDialogView: fe
            }
        }
          , he = pe
          , Ae = (a("94de"),
        Object(C["a"])(he, W, L, !1, null, "2a7cd94b", null))
          , ke = Ae.exports
          , be = {
            name: "app",
            components: {
                HeaderWidget: S,
                HeaderAsideMenu: V,
                FooterWidget: K,
                DownloadAppDialog: ke
            },
            computed: {}
        }
          , ve = be
          , ye = (a("c0a9"),
        Object(C["a"])(ve, l, s, !1, null, "26d5efe4", null))
          , Ce = ye.exports
          , we = a("8c4f")
          , Te = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "home-page"
            }, [i("section", {
                staticClass: "section-item section-home"
            }, [i("normal-layout", {
                staticClass: "section-content"
            }, [i("div", {
                staticClass: "content-left"
            }, [i("div", {
                staticClass: "title"
            }, [e._v(e._s(e.$t("home.title")))]), i("div", {
                staticClass: "buttons"
            }, [i("a", {
                staticClass: "common-button button-42 button-second",
                attrs: {
                    href: e.buyDxctUrl,
                    target: "_blank"
                }
            }, [e._v(e._s(e.$t("common.buyDXCT")))]), i("a", {
                staticClass: "common-button button-42 button-outline",
                attrs: {
                    target: "_blank",
                    href: "https://market.dnaxcat.io/gettingstarted"
                }
            }, [e._v(e._s(e.$t("common.gettingStarted")))])])]), i("div", {
                staticClass: "content-right"
            }, [i("video", {
                attrs: {
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    poster: a("0a30"),
                    muted: ""
                },
                domProps: {
                    muted: !0
                }
            }, [i("source", {
                attrs: {
                    src: a("0439"),
                    type: "video/mp4"
                }
            })])])]), i("div", {
                staticClass: "socials"
            }, [i("normal-layout", [i("div", {
                staticClass: "social-list"
            }, e._l(e.socialList, (function(e, t) {
                return i("a", {
                    key: t,
                    attrs: {
                        href: e.url,
                        target: "_blank"
                    }
                }, [i("img", {
                    attrs: {
                        src: e.icon
                    }
                })])
            }
            )), 0)])], 1)], 1), i("section", {
                staticClass: "section-item section-about"
            }, [i("normal-layout", {
                staticClass: "section-content"
            }, [i("div", {
                staticClass: "cover"
            }, [i("img", {
                attrs: {
                    src: a("94f6")
                }
            })]), i("div", {
                staticClass: "about-content"
            }, [i("div", {
                staticClass: "title"
            }, [e._v(e._s(e.$t("about.title")))]), i("div", {
                staticClass: "brief"
            }, [i("p", [e._v(e._s(e.$t("about.brief1")))]), i("p", [e._v(e._s(e.$t("about.brief2")))])])])])], 1), i("section", {
                staticClass: "section-item section-characters"
            }, [i("normal-layout", {
                staticClass: "section-content"
            }, [i("div", {
                staticClass: "title"
            }, [e._v(e._s(e.$t("characters.title")))]), i("div", {
                staticClass: "tab-list"
            }, e._l(e.characterTabList, (function(t, a) {
                return i("a", {
                    key: a,
                    class: "common-button button-60 " + (e.characterTabIndex === a ? "button-primary" : "button-black"),
                    on: {
                        click: function() {
                            e.characterTabIndex = a,
                            e.characterIndex = 0
                        }
                    }
                }, [e._v(e._s(t.title))])
            }
            )), 0)])], 1), i("section", {
                staticClass: "section-item section-characters-2"
            }, [i("normal-layout", {
                staticClass: "section-content"
            }, [i("div", {
                staticClass: "aside-info"
            }, [i("div", {
                staticClass: "info-top"
            }, [e.currentLable ? i("div", {
                staticClass: "lable-icon",
                style: {
                    "background-image": "url(" + e.currentLable + ")"
                }
            }) : e._e(), i("div", {
                staticClass: "info-name"
            }, [i("div", {
                staticClass: "info-title"
            }, [e._v(e._s(e.currentCharacter.name))]), i("div", {
                staticClass: "element-icon"
            }, [i("img", {
                attrs: {
                    src: e.currentCharacterElement.icon
                }
            })])]), i("div", {
                staticClass: "infos"
            }, [i("div", {
                staticClass: "info-item"
            }, [e._v("\n              " + e._s(e.$t("characters.element")) + " "), i("span", [e._v(e._s(e.currentCharacterElement.name))])]), i("div", {
                staticClass: "info-item"
            }, [e._v("\n              " + e._s(e.$t("characters.force")) + " "), i("span", [e._v(e._s(e.currentCharacterTab.title))])])])]), i("div", {
                staticClass: "info-bottom"
            }, [i("div", {
                staticClass: "sub-title"
            }, [e._v("\n            " + e._s(e.$t("characters.bodyParts")) + "\n          ")]), i("div", {
                staticClass: "part-list"
            }, e._l(e.currentCharacter.parts, (function(t, a) {
                return i("div", {
                    key: a,
                    staticClass: "part-item"
                }, [i("img", {
                    attrs: {
                        src: t.item_image
                    }
                }), i("span", [e._v(e._s(t.item_name))])])
            }
            )), 0)])]), i("div", {
                staticClass: "main-info"
            }, [i("div", {
                staticClass: "cover"
            }, [i("spine-cat-view", {
                staticStyle: {
                    "margin-top": "10px"
                },
                attrs: {
                    imgUri: e.currentCharacter.uri
                }
            })], 1), i("div", {
                staticClass: "scroll-outer"
            }, [i("a", {
                class: "op-icon left-icon" + (e.hasPrev ? "" : " disabled-icon"),
                on: {
                    click: e.goPrev
                }
            }), i("div", {
                ref: "refScrollView",
                staticClass: "scroll-view"
            }, [i("div", {
                ref: "refScrollInnerView",
                staticClass: "scroll-inner"
            }, e._l(e.characterList, (function(t, a) {
                return i("div", {
                    key: a,
                    class: "nft-item" + (a === e.characterIndex ? " selected" : ""),
                    on: {
                        click: function(t) {
                            e.characterIndex = a
                        }
                    }
                }, [i("bg-box", {
                    staticClass: "icon",
                    attrs: {
                        square: "",
                        image: t.uri
                    }
                }), i("div", {
                    staticClass: "title"
                }, [e._v(e._s(t.name))])], 1)
            }
            )), 0)]), i("a", {
                class: "op-icon right-icon" + (e.hasNext ? "" : " disabled-icon"),
                on: {
                    click: e.goNext
                }
            })])]), i("div", {
                staticClass: "aside-attrs"
            }, [i("div", {
                staticClass: "top-info"
            }, [i("div", {
                staticClass: "sub-title"
            }, [e._v("\n            " + e._s(e.$t("characters.properties")) + "\n          ")]), i("div", {
                staticClass: "element-list"
            }, e._l(e.propertieList, (function(t, a) {
                return i("div", {
                    key: a,
                    staticClass: "data-item"
                }, [i("div", {
                    staticClass: "s-title"
                }, [e._v(e._s(t.title))]), i("div", {
                    staticClass: "s-value"
                }, [i("bg-box", {
                    staticClass: "cover-image",
                    attrs: {
                        image: t.icon
                    }
                }), i("span", [e._v(e._s(t.value))])], 1)])
            }
            )), 0)]), i("div", {
                staticClass: "bottom-info"
            }, [i("div", {
                staticClass: "sub-title"
            }, [e._v("\n            " + e._s(e.$t("characters.skill")) + "\n          ")]), i("div", {
                staticClass: "skill-list"
            }, e._l(e.skillList, (function(t, n) {
                return i("div", {
                    key: n,
                    staticClass: "skill-item"
                }, [i("div", {
                    staticClass: "s-title"
                }, [i("img", {
                    staticClass: "icon",
                    attrs: {
                        src: t.icon
                    }
                }), i("div", {
                    staticClass: "info"
                }, [i("div", {
                    staticClass: "title-name",
                    style: t.color ? "color: " + t.color : ""
                }, [e._v(e._s(t.skill_name))]), i("div", {
                    staticClass: "title-quality"
                }, e._l(t.quality_level, (function(e) {
                    return i("img", {
                        key: e,
                        attrs: {
                            src: a("4310")
                        }
                    })
                }
                )), 0)])]), i("div", {
                    staticClass: "brief"
                }, [e._v("\n                " + e._s(t.skill_brief) + "\n              ")])])
            }
            )), 0)])])])], 1), i("div", {
                staticClass: "more-buttons"
            }, [i("a", {
                staticClass: "common-button button-60 button-black",
                attrs: {
                    target: "_blank",
                    href: "https://docs.v2.dnaxcat.io/dnaxcat/dnaxcat/new-to-game/introduction-of-genesis-cats/genesis-cat-cat-goddess-emerald"
                }
            }, [e._v(e._s(e.$t("characters.viewMore")))])]), i("section", {
                staticClass: "section-item section-features"
            }, [i("normal-layout", {
                staticClass: "section-content"
            }, [i("div", {
                staticClass: "title"
            }, [e._v(e._s(e.$t("features.title")))]), i("div", {
                staticClass: "feature-list"
            }, e._l(e.features, (function(t, a) {
                return i("div", {
                    key: a,
                    staticClass: "common-bg feature-item"
                }, [i("div", {
                    staticClass: "cover",
                    style: "background-image: url(" + t.icon + ")"
                }), i("div", {
                    staticClass: "title"
                }, [e._v(e._s(t.title))]), i("div", {
                    staticClass: "brief"
                }, [e._v(e._s(t.brief))])])
            }
            )), 0)])], 1), i("section", {
                staticClass: "section-item section-token"
            }, [i("normal-layout", {
                staticClass: "section-content"
            }, [i("div", {
                staticClass: "token-infos"
            }, [i("div", {
                staticClass: "left-info"
            }, [i("div", {
                staticClass: "item-title"
            }, [e._v(e._s(e.$t("token.title")))]), i("div", {
                staticClass: "item-brief"
            }, [e._v(e._s(e.$t("token.brief")))]), i("div", {
                staticClass: "item-contract"
            }, [e._v("\n            Contract\n            "), i("div", [e._v("0x5b1baec64af6dc54e6e04349315919129a6d3c23")]), i("img", {
                attrs: {
                    src: a("f4dd")
                }
            })]), i("div", {
                staticClass: "buttons"
            }, [i("a", {
                staticClass: "common-button button-42 button-second",
                attrs: {
                    target: "_blank",
                    href: e.buyDxctUrl
                }
            }, [e._v(e._s(e.$t("common.buyDXCT")))])])]), i("div", {
                staticClass: "right-chart"
            }, [i("img", {
                attrs: {
                    src: a("3bec")
                }
            })])])])], 1), i("section", {
                staticClass: "section-item section-friends"
            }, [i("normal-layout", {
                staticClass: "section-content economics"
            }, [i("div", {
                staticClass: "title"
            }, [e._v(e._s(e.$t("friends.title")))]), i("div", {
                staticClass: "economics-list"
            }, e._l(e.economics, (function(t, a) {
                return i("div", {
                    key: a,
                    staticClass: "common-bg economics-item"
                }, [i("div", {
                    staticClass: "icon",
                    style: "background-image: url(" + t.icon + ")"
                }), i("div", {
                    staticClass: "item-title"
                }, [e._v(e._s(t.title))])])
            }
            )), 0)]), i("normal-layout", {
                staticClass: "section-content supporter"
            }, [i("div", {
                staticClass: "title"
            }, [e._v(e._s(e.$t("supporter.title")))]), i("div", {
                staticClass: "friends-list"
            }, e._l(e.friends, (function(e, t) {
                return i("a", {
                    key: t,
                    staticClass: "friend-item",
                    style: "background-image: url(" + e.bgImage + ")",
                    attrs: {
                        href: e.url ? e.url : "javascript:;",
                        target: e.url ? "_blank" : ""
                    }
                })
            }
            )), 0)])], 1)])
        }
          , xe = []
          , De = (a("8e6e"),
        a("ac6a"),
        a("456d"),
        a("bd86"))
          , Ee = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "normal-layout"
            }, [e._t("default")], 2)
        }
          , Se = []
          , qe = (a("453b"),
        {})
          , je = Object(C["a"])(qe, Ee, Se, !1, null, "79aa0af6", null)
          , _e = je.exports
          , Ue = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: "bg-box" + (e.square ? " box-square" : ""),
                style: e.image ? "background-image: url(" + e.image + ")" : ""
            }, [e._t("default")], 2)
        }
          , Re = []
          , Ne = {
            props: {
                image: {
                    type: String
                },
                square: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , Be = Ne
          , Qe = (a("4d7d"),
        Object(C["a"])(Be, Ue, Re, !1, null, "68794ae5", null))
          , Oe = Qe.exports
          , Ie = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "spine-cat-view",
                style: e.loading || 2 !== e.spineStatus ? {} : {
                    backgroundImage: "url(" + e.imgUri + ")"
                }
            }, [a("canvas", {
                ref: "canvas",
                staticClass: "spine-view",
                style: {
                    visibility: 1 === e.spineStatus ? "visible" : "hidden"
                }
            }), a("div", {
                staticClass: "loading-outer"
            }, [a("common-simple-loading", {
                attrs: {
                    isVisible: !!e.loading
                }
            })], 1)])
        }
          , Pe = []
          , Ve = (a("96cf"),
        a("3b8d"))
          , Me = (a("a481"),
        function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "common-loading"
            }, [a("div", {
                class: "animate-inner" + (e.showAnimate ? " animate-show" : "")
            }, [e.show ? a("svg", {
                staticClass: "icon",
                attrs: {
                    viewBox: "0 0 1024 1024",
                    width: e.size,
                    height: e.size,
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                attrs: {
                    d: "M512 0C229.376 0 0 229.376 0 512c0 282.88 229.376 512 512 512 27.648 0 50.176-22.528 50.176-50.176s-22.528-50.176-50.176-50.176c-227.328 0-411.648-184.32-411.648-411.648 0-227.328 184.32-411.648 411.648-411.648 227.328 0 411.648 184.32 411.648 411.648 0 27.648 22.528 50.176 50.176 50.176S1024 539.648 1024 512C1024 229.376 794.88 0 512 0z m0 0",
                    fill: e.color
                }
            })]) : e._e()])])
        }
        )
          , Ge = []
          , ze = (a("c5f6"),
        {
            data: function() {
                return {
                    show: !1,
                    showAnimate: !1,
                    timerId: -1
                }
            },
            props: {
                size: {
                    type: Number,
                    default: 16
                },
                color: {
                    type: String,
                    default: "#6BD734"
                },
                isVisible: {
                    type: Boolean,
                    default: !1
                }
            },
            watch: {
                isVisible: function() {
                    var e = this;
                    this.isVisible !== this.show && (clearTimeout(this.timerId),
                    this.isVisible ? (this.show = !0,
                    this.showAnimate = !0) : (this.showAnimate = !1,
                    this.timerId = setTimeout((function() {
                        e.show = !1
                    }
                    ), 360)))
                }
            }
        })
          , Fe = ze
          , Ye = (a("24df"),
        Object(C["a"])(Fe, Me, Ge, !1, null, "0e1ca7ec", null))
          , Ke = Ye.exports;
        a("7f7f"),
        a("20d6");
        function We(e) {
            return /android/i.test((e || navigator && navigator.userAgent || "").toLowerCase())
        }
        function Le(e, t) {
            return new Promise((function(a, i) {
                var n = window
                  , o = n.document
                  , r = "script"
                  , l = o.getElementsByTagName(r)[0]
                  , s = o.createElement(r);
                s.async = !0,
                s.src = e,
                s.onload = function() {
                    t ? "undefined" !== typeof n[t] ? a(n[t]) : i(new Error("'window.".concat(t, "' not found"))) : a({
                        success: !0,
                        url: e
                    })
                }
                ,
                s.onerror = function() {
                    i(new Error("load error：".concat(e, " ")))
                }
                ,
                l.parentNode.insertBefore(s, l)
            }
            ))
        }
        var Ze, Je, He, Xe, $e, et, tt, at, it, nt, ot, rt, lt = "/cat/", st = !0, ct = 3, dt = 0, mt = 0, ut = null, gt = !1, ft = !0, pt = [], ht = null, At = function() {};
        function kt(e, t, a) {
            Ze = t,
            ut = e,
            At = a,
            Je = new ut.webgl.Matrix4;
            var i = {
                alpha: !0
            };
            He = Ze.getContext("webgl", i) || Ze.getContext("experimental-webgl", i),
            He && (Xe = ut.webgl.Shader.newTwoColoredTextured(He),
            $e = new ut.webgl.PolygonBatcher(He),
            Je.ortho2d(0, 0, Ze.width - 1, Ze.height - 1),
            tt = new ut.webgl.SkeletonRenderer(He),
            at = new ut.webgl.AssetManager(He))
        }
        function bt(e) {
            var t = "get"
              , a = new XMLHttpRequest;
            return a.open(t, e, !0),
            a.send(null),
            new Promise((function(e, t) {
                a.onreadystatechange = function() {
                    4 === a.readyState && (200 === a.status ? e(JSON.parse(a.responseText)) : e(!1))
                }
            }
            ))
        }
        function vt(e) {
            if (it) {
                var t = ht.db_face_res[pt.face];
                return "".concat(lt, "assets/combine_cat/c").concat(t.color_id, "/hero_cat.atlas.txt")
            }
            return "".concat(lt, "assets/").concat(e, "/").concat(e, ".atlas.txt")
        }
        function yt(e) {
            if (it) {
                var t = ht.db_face_res[pt.face];
                return "".concat(lt, "assets/combine_cat/c").concat(t.color_id, "/hero_cat.json")
            }
            return "".concat(lt, "assets/").concat(e, "/").concat(e, ".json")
        }
        function Ct(e) {
            e.setToSetupPose(),
            e.updateWorldTransform();
            var t = new ut.Vector2
              , a = new ut.Vector2;
            return e.getBounds(t, a, []),
            {
                offset: t,
                size: a
            }
        }
        function wt(e, t) {
            var a = e.findIndex((function(e) {
                return e.data.name === t
            }
            ));
            return a >= 0 && e[a].attachment
        }
        function Tt(e, t, a) {
            ht.db_skill_cat_part_slot[t] && ht.db_skill_cat_part_slot[t].forEach((function(t) {
                var i = wt(e, t);
                i instanceof ut.MeshAttachment ? t !== a && (i.region.u = 0,
                i.region.u2 = 0,
                i.region.v = 0,
                i.region.v2 = 0,
                i.color = new ut.Color(1,1,1,t === a ? 1 : 0),
                i.updateUVs()) : i.color = new ut.Color(1,1,1,t === a ? 1 : 0)
            }
            ))
        }
        function xt(e, t, a) {
            var i = wt(e, a);
            if (i) {
                var n = rt[t][0]
                  , o = rt[t][1]
                  , r = rt[t][2]
                  , l = rt[t][3]
                  , s = i.region.page.width
                  , c = i.region.page.height;
                i instanceof ut.MeshAttachment ? (i.region.u = n / s,
                i.region.u2 = i.region.u + r / s,
                i.region.v = o / c,
                i.region.v2 = i.region.v + l / c,
                i.updateUVs()) : (i.rotate = !1,
                i.region.u = n / s,
                i.region.u2 = i.region.u + r / s,
                i.region.v = o / c,
                i.region.v2 = i.region.v + l / c,
                i.setRegion(i.region))
            } else
                console.error("".concat(nt, " Spine中无法找到插槽 ").concat(a))
        }
        function Dt(e, t, a, i) {
            void 0 === i && (i = "default");
            var n = at.get(vt(e))
              , o = new ut.AtlasAttachmentLoader(n)
              , r = new ut.SkeletonJson(o);
            r.scale = ct;
            var l = r.readSkeletonData(at.get(yt(e)))
              , s = new ut.Skeleton(l);
            s.setSkinByName(i);
            var c = Ct(s);
            if (it) {
                pt.skinPart.forEach((function(e) {
                    var t = ht.db_cat_skin_part[e];
                    if (1 === t.part && t.piece_name.length < 5) {
                        var a = wt(s.slots, "Earfur_L")
                          , i = wt(s.slots, "Earfur_R");
                        a.color = new ut.Color(1,1,1,0),
                        i.color = new ut.Color(1,1,1,0)
                    }
                    t.piece_name.forEach((function(e) {
                        xt(s.slots, e[0], e[1])
                    }
                    ))
                }
                ));
                var d = ht.db_face_res[pt.face].piece_name;
                xt(s.slots, d[0], d[1]),
                Object.keys(ht.db_skill_cat_part_slot).forEach((function(e) {
                    var t = "";
                    if (0 !== pt[e]) {
                        var a = ht.db_skill_cat_part[pt[e]].piece_name;
                        a && (t = a[1],
                        xt(s.slots, a[0], a[1]))
                    }
                    Tt(s.slots, e, t)
                }
                ))
            }
            for (var m = ["yz", "touying", "Shadow", "shadow"], u = 0, g = m.length; u < g; u += 1) {
                var f = m[u]
                  , p = wt(s.slots, f);
                if (p) {
                    p.color = new ut.Color(1,1,1,0);
                    break
                }
            }
            var h = new ut.AnimationStateData(s.data)
              , A = new ut.AnimationState(h);
            return A.setAnimation(0, t, !0),
            {
                skeleton: s,
                state: A,
                bounds: c,
                premultipliedAlpha: a
            }
        }
        function Et() {
            var e = Ze.clientWidth
              , t = Ze.clientHeight;
            Ze.width === e && Ze.height === t || (Ze.width = e,
            Ze.height = t);
            var a = et.bounds
              , i = a.offset.x + a.size.x / 2;
            it && (i += 50);
            var n = a.offset.y + a.size.y / 2
              , o = a.size.x / Ze.width
              , r = a.size.y / Ze.height
              , l = 1.2 * Math.max(o, r);
            l < 1 && (l = 1);
            var s = Ze.width * l
              , c = Ze.height * l;
            Je.ortho2d(i - s / 2, n - c / 2, s, c);
            var d = it ? .4 * Ze.width : 0;
            He.viewport(dt - d / 2, mt - d / 2, Ze.width + d, Ze.height + d)
        }
        function St() {
            if (!st) {
                var e = Date.now() / 1e3
                  , t = e - ot;
                ot = e,
                Et(),
                He.clearColor(0, 0, 0, 0),
                He.clear(He.COLOR_BUFFER_BIT);
                var a = et.skeleton
                  , i = et.state
                  , n = (et.bounds,
                et.premultipliedAlpha);
                i.update(t),
                i.apply(a),
                a.updateWorldTransform(),
                Xe.bind(),
                Xe.setUniformi(ut.webgl.Shader.SAMPLER, 0),
                Xe.setUniform4x4f(ut.webgl.Shader.MVP_MATRIX, Je.values),
                $e.begin(Xe),
                tt.vertexEffect = null,
                tt.premultipliedAlpha = n,
                tt.draw($e, a),
                $e.end(),
                Xe.unbind(),
                requestAnimationFrame(St),
                gt || (At(!0, Ze, He),
                gt = !0)
            }
        }
        function qt() {
            if (at.isLoadingComplete()) {
                var e = "idle";
                it && (e = ht.db_skill_cat_part[pt.weapon] ? "".concat(ht.db_skill_cat_part[pt.weapon].action, "/idle") : "empty/idle"),
                et = Dt(nt, e, !0),
                ot = Date.now() / 1e3,
                requestAnimationFrame(St)
            } else
                requestAnimationFrame(qt)
        }
        function jt() {
            return _t.apply(this, arguments)
        }
        function _t() {
            return _t = Object(Ve["a"])(regeneratorRuntime.mark((function e() {
                var t, a, i;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (!it) {
                                e.next = 10;
                                break
                            }
                            return nt = "hero_cat",
                            t = ht.db_face_res[pt.face],
                            a = "".concat(lt, "assets/combine_cat/c").concat(t.color_id, "/hero_cat_atlas.json"),
                            e.next = 6,
                            bt(a);
                        case 6:
                            if (i = e.sent,
                            i) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return");
                        case 9:
                            rt = i;
                        case 10:
                            at.loadText(yt(nt)),
                            at.loadTextureAtlas(vt(nt)),
                            requestAnimationFrame(qt);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            _t.apply(this, arguments)
        }
        function Ut(e) {
            it = !1;
            var t = ht.db_cats[e];
            nt = t.show,
            ft && t.offset && (dt = t.offset[0],
            mt = t.offset[1]),
            jt()
        }
        function Rt(e) {
            for (var t = [], a = 0; a < 8; a += 1)
                t[a] = e[a];
            it = !0;
            var i = ht.db_skill_cat_part[e[9]];
            ft && i && i.offset && (dt = i.offset[0],
            mt = i.offset[1]),
            pt = {
                skinPart: t,
                face: e[8],
                weapon: e[9],
                headdress: e[10],
                ornament: e[11],
                tail: e[12]
            },
            jt()
        }
        function Nt() {
            return Bt.apply(this, arguments)
        }
        function Bt() {
            return Bt = Object(Ve["a"])(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (window.spine) {
                                e.next = 3;
                                break
                            }
                            return e.next = 3,
                            Le("".concat(lt, "spine-webgl.js"), "spine");
                        case 3:
                            if (ht) {
                                e.next = 7;
                                break
                            }
                            return e.next = 6,
                            bt("".concat(lt, "cat-config.json"));
                        case 6:
                            ht = e.sent;
                        case 7:
                            return e.abrupt("return", window.spine && ht);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Bt.apply(this, arguments)
        }
        function Qt(e, t, a, i) {
            return Ot.apply(this, arguments)
        }
        function Ot() {
            return Ot = Object(Ve["a"])(regeneratorRuntime.mark((function e(t, a, i, n) {
                var o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Nt();
                        case 2:
                            if (o = e.sent,
                            o) {
                                e.next = 6;
                                break
                            }
                            return n(!1),
                            e.abrupt("return");
                        case 6:
                            kt(window.spine, t, n),
                            st = !1,
                            "genesis" === a ? Ut(i) : "brave" === a ? Rt(i) : (st = !0,
                            n(!1));
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Ot.apply(this, arguments)
        }
        function It() {
            st = !0,
            Je = null,
            He = null,
            Xe = null,
            $e = null,
            tt = null,
            at = null,
            gt = !1
        }
        var Pt = {
            data: function() {
                return {
                    spineStatus: 0,
                    loading: 0
                }
            },
            props: {
                imgUri: {
                    type: String
                }
            },
            components: {
                CommonSimpleLoading: Ke
            },
            computed: {
                imageKey: function() {
                    return this.imgUri ? String(this.imgUri).replace(/(.*\/)*([^.]+).*/gi, "$2") : ""
                },
                spineData: function() {
                    if (!this.imageKey)
                        return null;
                    if (oe[this.imageKey])
                        return {
                            type: "genesis",
                            value: oe[this.imageKey]
                        };
                    var e = this.imageKey.split("-");
                    return 13 === e.length ? {
                        type: "brave",
                        value: e.map((function(e) {
                            return parseInt(e, 10)
                        }
                        ))
                    } : null
                }
            },
            mounted: function() {
                this.initData()
            },
            methods: {
                initData: function() {
                    var e = Object(Ve["a"])(regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (It(),
                                    this.spineStatus = 0,
                                    this.loading = 1,
                                    this.spineData) {
                                        e.next = 6;
                                        break
                                    }
                                    return this.onLoadSuccess(!1),
                                    e.abrupt("return");
                                case 6:
                                    return e.prev = 6,
                                    e.next = 9,
                                    Qt(this.$refs.canvas, this.spineData.type, this.spineData.value, (function(e) {
                                        t.onLoadSuccess(e)
                                    }
                                    ));
                                case 9:
                                    e.next = 15;
                                    break;
                                case 11:
                                    throw e.prev = 11,
                                    e.t0 = e["catch"](6),
                                    this.onLoadSuccess(!1),
                                    e.t0;
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[6, 11]])
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                onLoadSuccess: function(e) {
                    var t = this;
                    if (e)
                        return this.spineStatus = 1,
                        void (this.loading = 0);
                    this.spineStatus = 2,
                    It();
                    var a = new Image;
                    a.onload = a.onerror = function() {
                        t.loading = 0
                    }
                    ,
                    a.src = this.imgUri
                }
            },
            watch: {
                imageKey: function() {
                    this.initData()
                }
            },
            beforeDestroy: function() {
                this.spineStatus = 0,
                It()
            }
        }
          , Vt = Pt
          , Mt = (a("2c87"),
        Object(C["a"])(Vt, Ie, Pe, !1, null, "b1cb4406", null))
          , Gt = Mt.exports
          , zt = a("2398")
          , Ft = a.n(zt)
          , Yt = a("0a56")
          , Kt = a.n(Yt)
          , Wt = a("9a01")
          , Lt = a.n(Wt)
          , Zt = a("f412")
          , Jt = a.n(Zt)
          , Ht = a("f523")
          , Xt = a.n(Ht)
          , $t = a("77b9")
          , ea = a.n($t)
          , ta = a("2dc7")
          , aa = a.n(ta)
          , ia = a("9a46")
          , na = a.n(ia)
          , oa = a("9e4f")
          , ra = a.n(oa)
          , la = a("685b")
          , sa = a.n(la)
          , ca = a("d8eb")
          , da = a.n(ca)
          , ma = a("faa6")
          , ua = a.n(ma)
          , ga = a("0a17")
          , fa = a.n(ga)
          , pa = a("0453")
          , ha = a.n(pa)
          , Aa = a("4dec")
          , ka = a.n(Aa)
          , ba = a("430c")
          , va = a.n(ba)
          , ya = a("f714")
          , Ca = a.n(ya)
          , wa = a("bcc4")
          , Ta = a.n(wa)
          , xa = a("ce0d")
          , Da = a.n(xa)
          , Ea = a("d983")
          , Sa = a.n(Ea)
          , qa = a("57f1")
          , ja = a.n(qa)
          , _a = a("21de")
          , Ua = a.n(_a)
          , Ra = a("2fb1")
          , Na = a.n(Ra)
          , Ba = a("85a9")
          , Qa = a.n(Ba)
          , Oa = a("17db")
          , Ia = a.n(Oa);
        function Pa(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, i)
            }
            return a
        }
        function Va(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Pa(Object(a), !0).forEach((function(t) {
                    Object(De["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Pa(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Ma = {
            data: function() {
                return {
                    characterTabIndex: 0,
                    characterIndex: 0
                }
            },
            components: {
                NormalLayout: _e,
                BgBox: Oe,
                SpineCatView: Gt
            },
            computed: {
                buyDxctUrl: function() {
                    return ae
                },
                socialList: function() {
                    return [{
                        icon: Ca.a,
                        url: "https://twitter.com/dnaxcat_game"
                    }, {
                        icon: Da.a,
                        url: "https://t.me/DNAxCAT_official"
                    }, {
                        icon: Ta.a,
                        url: "https://medium.com/@DNAxCAT_GAME"
                    }, {
                        icon: va.a,
                        url: "https://discord.gg/YooShiGamePad"
                    }, {
                        icon: Sa.a,
                        url: "mailto:hello@dnaxcat.io"
                    }]
                },
                characterList: function() {
                    var e = this;
                    return se.filter((function(t) {
                        return t.force_id === e.currentCharacterTab.id
                    }
                    ))
                },
                characterTabList: function() {
                    return [{
                        title: this.$t("characters.meowKing"),
                        id: 1
                    }, {
                        title: this.$t("characters.sakuraVill"),
                        id: 2
                    }, {
                        title: this.$t("characters.meowDev"),
                        id: 3
                    }]
                },
                currentCharacterTab: function() {
                    return this.characterTabList[this.characterTabIndex]
                },
                hasPrev: function() {
                    return this.characterIndex > 0
                },
                hasNext: function() {
                    return this.characterIndex < this.characterList.length - 1
                },
                currentCharacter: function() {
                    return this.characterList[this.characterIndex]
                },
                currentLable: function() {
                    return (le[this.currentCharacter.type_id] || le[7]).tagIcon
                },
                currentCharacterElement: function() {
                    return ie[this.currentCharacter.element_id]
                },
                propertieList: function() {
                    var e = this.currentCharacter.battle_info || {}
                      , t = e.vit
                      , a = e.str
                      , i = e.def
                      , n = e.mor
                      , o = e.agi;
                    return [{
                        title: this.$t("characters.vitality"),
                        icon: ja.a,
                        value: t || 0
                    }, {
                        title: this.$t("characters.strength"),
                        icon: Ua.a,
                        value: a || 0
                    }, {
                        title: this.$t("characters.defense"),
                        icon: Na.a,
                        value: i || 0
                    }, {
                        title: this.$t("characters.morale"),
                        icon: Qa.a,
                        value: n || 0
                    }, {
                        title: this.$t("characters.agility"),
                        icon: Ia.a,
                        value: o || 0
                    }]
                },
                skillList: function() {
                    return this.currentCharacter.skills.map((function(e) {
                        return Va(Va({}, e), {}, {
                            color: ne[e.quality_level] || ne[5]
                        })
                    }
                    ))
                },
                features: function() {
                    return [{
                        icon: sa.a,
                        title: this.$t("features.title1"),
                        brief: this.$t("features.brief1")
                    }, {
                        icon: da.a,
                        title: this.$t("features.title2"),
                        brief: this.$t("features.brief2")
                    }, {
                        icon: ua.a,
                        title: this.$t("features.title3"),
                        brief: this.$t("features.brief3")
                    }, {
                        icon: fa.a,
                        title: this.$t("features.title4"),
                        brief: this.$t("features.brief4")
                    }, {
                        icon: ha.a,
                        title: this.$t("features.title5"),
                        brief: this.$t("features.brief5")
                    }, {
                        icon: ka.a,
                        title: this.$t("features.title6"),
                        brief: this.$t("features.brief6")
                    }]
                },
                economics: function() {
                    return [{
                        icon: ea.a,
                        title: this.$t("economics.title1")
                    }, {
                        icon: aa.a,
                        title: this.$t("economics.title2")
                    }, {
                        icon: na.a,
                        title: this.$t("economics.title3")
                    }, {
                        icon: ra.a,
                        title: this.$t("economics.title4")
                    }]
                },
                friends: function() {
                    return [{
                        url: "https://www.binance.org",
                        bgImage: Jt.a
                    }, {
                        url: "https://yooshi.io",
                        bgImage: Xt.a
                    }, {
                        url: "https://coinmarketcap.com/currencies/dnaxcat-token",
                        bgImage: Kt.a
                    }, {
                        url: "https://www.coingecko.com/en/coins/dnaxcat",
                        bgImage: Lt.a
                    }, {
                        url: "https://www.certik.org/projects/dnaxcat",
                        bgImage: Ft.a
                    }]
                }
            },
            methods: {
                goPrev: function() {
                    this.characterIndex -= 1
                },
                goNext: function() {
                    this.characterIndex += 1
                },
                autoScroll: function() {
                    var e = 0;
                    if (this.characterIndex > 0) {
                        var t = document.documentElement.offsetWidth <= 1100
                          , a = this.$refs.refScrollInnerView.children[this.characterIndex + (t ? 0 : -1)];
                        a && (e = Math.max(a.offsetLeft - (this.$refs.refScrollView.offsetWidth - a.offsetWidth) / 2, 0),
                        e = e ? e + (t ? 0 : 10) : e)
                    }
                    this.$refs.refScrollView.scrollTo({
                        left: e,
                        behavior: "smooth"
                    })
                }
            },
            watch: {
                characterIndex: function() {
                    this.autoScroll()
                }
            }
        }
          , Ga = Ma
          , za = (a("7bb5"),
        Object(C["a"])(Ga, Te, xe, !1, null, "41dddaa0", null))
          , Fa = za.exports;
        function Ya() {
            return new we["a"]({
                mode: "history",
                routes: [{
                    path: "/",
                    name: "Home",
                    component: Fa
                }, {
                    path: "*",
                    redirect: "/"
                }],
                scrollBehavior: function(e, t, a) {
                    if (e.path !== t.path)
                        return a || (t.meta.keepAlive && (t.meta.savedPosition = document.body.scrollTop),
                        {
                            x: 0,
                            y: e.meta.savedPosition || 0
                        })
                }
            })
        }
        i["a"].use(we["a"]);
        var Ka = a("a925")
          , Wa = a("e088")
          , La = a("9b87")
          , Za = a("1a03")
          , Ja = a("d6ce")
          , Ha = a("a4bf")
          , Xa = a("d09c")
          , $a = a("8471")
          , ei = a("59ad")
          , ti = a("832d")
          , ai = a("7bb0")
          , ii = a("a33e")
          , ni = a("bc57")
          , oi = a("9a00")
          , ri = a("3597")
          , li = a("9109");
        function si(e) {
            return new Ka["a"]({
                locale: e.lang,
                messages: {
                    en: Wa,
                    filipino: La,
                    french: Za,
                    german: Ja,
                    india: Ha,
                    indonesian: Xa,
                    italian: $a,
                    janpanese: ei,
                    korean: ti,
                    portuguese: ai,
                    russian: ii,
                    spanish: ni,
                    turkish: oi,
                    vietnamnese: ri,
                    hk: li
                },
                fallbackLocale: "en"
            })
        }
        i["a"].use(Ka["a"]);
        a("537a");
        var ci = si({
            lang: p()
        });
        i["a"].use(r["a"]),
        i["a"].config.productionTip = !1,
        We() && "addEventListener"in document && document.addEventListener("DOMContentLoaded", (function() {
            o.a.attach(document.body)
        }
        ), !1),
        new i["a"]({
            data: function() {
                return {
                    showDownloadDialog: 0
                }
            },
            i18n: ci,
            router: Ya(),
            render: function(e) {
                return e(Ce)
            },
            beforeCreate: function() {
                i["a"].prototype.eventBus = this
            }
        }).$mount("#app")
    },
    "57f1": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "59ad": function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"ダウンロード　アプリ","desc":"ウォレットアドレスを使って、ゲームの登録とログインを行う"},"common":{"buyDXCT":"$DXCT　買う","playNow":"今すぐプレイ"},"home":{"title":"ブロックチェーン上の猫のメタバースゲーム"},"about":{"title":"DNAxCATについて","brief1":"DNAxCATは、プレイヤーが様々なかわいい猫を育て、繁殖させ、あなたの猫と一緒に冒険の世界で肩を並べて戦うことができるデジタル猫ペットの世界を作ります。","brief2":"また、DNAxCATは、所有権がプレイヤーによって完全に決定される経済であり、プレイヤーはゲーム資産を暗号通貨に簡単に売却・取引することができます。DNAxCATは、GameFiや \\" Play To Earn \\"のトレンドをリードし、プレイヤーがゲームをプレイすることで収入を得ることができます。"},"characters":{"title":"ゲームのキャラクター","viewMore":"詳細を見る","element":"エレメント:","force":"フォース:","bodyParts":"体のパーツ","properties":"プロパティ","skill":"スキル","meowKing":"ニャー王国","sakuraVill":"さくらの里","meowDev":"ニャーデビルダム","vitality":"バイタリティ","strength":"強さ","defense":"防御","morale":"モラル","agility":"敏捷性"},"features":{"title":"特徴","title1":"遊んで稼ぐ","brief1":"無料で遊べる, 遊んで稼げる, ゲームをプレイしてトークンを獲得し、マーケットでトレードする。","title2":"召喚","brief2":"任意の2匹の猫で勇者猫を召喚し、新しい猫を連れてゲームをプレイしたり、他のプレイヤーに売ったりすることができます。あなた次第です。","title3":"展示会","brief3":"ユニークな形をした様々なブレイブキャットを集めて、ソーシャルプラットフォームを通じて友達や他のプレイヤーに見せてあげましょう。","title4":"ソーシャル","brief4":"25万人以上のユーザーとコミュニケーションをとることで、より多くのゲームスキル、戦略、経験を得ることができます。","title5":"探検","brief5":"チームを作って、ゲーム内の敵を排除します。すべての猫には遺伝的特徴があります。猫チームをうまく配置して、チームで報酬を獲得しましょう。","title6":"シーズン","brief6":"シーズンモードでバトルを行い、ランキング上位を目指して、より多くのトークン報酬を手に入れましょう。"},"token":{"title":"DNAxCAT TOKEN","brief":"DNAxCAT Token(DXCT)は、DNAxCAT Metaverseのガバナンス通貨です。ゲーム内のヒーローキャットの取引、交換、繁殖に使用されます。"},"friends":{"title":"トークンエコノミクス"},"supporter":{"title":"戦略的サポーター"},"economics":{"title1":"ゲーム内通貨","title2":"ガバナンス","title3":"ステーキング","title4":"遊んで稼ぐ"}}')
    },
    "662f": function(e, t, a) {},
    "66eb": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "685b": function(e, t, a) {
        e.exports = a.p + "img/features-1.cd19d67f.png"
    },
    "68b2": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "77b9": function(e, t, a) {
        e.exports = a.p + "img/icon-economics-1.444db9c9.png"
    },
    "7b32": function(e, t, a) {},
    "7bb0": function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"Baixar Aplicativo","desc":"Use o endereço da sua carteira de criptomoedas para se registrar e conectar-se ao jogo."},"common":{"buyDXCT":"Compre $DXCT","playNow":"Jogue Agora"},"home":{"title":"JOGO METAVERSO COM GATOS NA BLOCKCHAIN"},"about":{"title":"Sobre DNAxCat","brief1":"DNAxCat traz um mundo digital onde os jogadores podem evoluir e criar uma variedade de gatos fofos para lutar e se aventurar pelo mundo.","brief2":"DNAxCat também é uma economia onde a propriedade é totalmente decidida pelos jogadores, permitindo que sevenda ou troque qualquer ativo do jogo por criptomoedas. DNAxCAT lidera a tendência da GameFi de Jogue para ganhar, permitindo aos jogadores ganhar apenas jogando."},"characters":{"title":"Personagens do jogo","viewMore":"Ver Mais","element":"Elemento:","force":"Força:","bodyParts":"Partes do corpo","properties":"Propriedades","skill":"Habilidade","meowKing":"Reino Meow","sakuraVill":"Vilarejo Sakura","meowDev":"Reino Meow Perverso","vitality":"Vitalidade","strength":"Força","defense":"Defesa","morale":"Moral","agility":"Agilidade"},"features":{"title":"Características","title1":"Jogue para Ganhar","brief1":"Gratuíto para jogar, Jogue para ganhar, ganhar tokens jogando jogos e então negocia-los no mercado.","title2":"Invocar","brief2":"Invoque novos gatos heróis através de outros dois e então você poderá ter novos gatos para usar no jogo ou vender para outros jogadores. A escolha é sua.","title3":"Exibição","brief3":"Colete uma variedade única de gatos heróis e então mostre eles para seus amigos e outros jogadores através de plataformas sociais.","title4":"Temporada","brief4":"Batalhe no modo temporada e tente obter uma classificação alta para obter recompensas maiores.","title5":"Expedition","brief5":"Build a team to eliminate enemies in the game. Every cat has genetic characteristics, make a good arrangement of your cats team and win rewards with your team.","title6":"Season","brief6":"Battle in the season mode and try to get a high ranking to get more token rewards."},"token":{"title":"Token DNAxCat","brief":"O token DNAxCat (DXCT) é a moeda de governança do metaverso DNAxCat. Será usado para troca e criação de gatos heróis."},"friends":{"title":"ECONOMIA DO TOKEN"},"supporter":{"title":"SUPORTE ESTRATÉGICO"},"economics":{"title1":"Moeda do jogo","title2":"Governança","title3":"Staking","title4":"Jogue para Ganhar"}}')
    },
    "7bb5": function(e, t, a) {
        "use strict";
        a("e24e")
    },
    "832d": function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"다운로드 APP","desc":"지갑 주소를 사용하여 등록하고 로그인하여 게임 실행"},"common":{"buyDXCT":"$DXCT 구매","playNow":"게임 실행"},"home":{"title":"블록 체인 고양이 메타버스 게임"},"about":{"title":"DNAxCAT에 대하여","brief1":"DNAxCAT은 다양한 종류의 귀여운 고양이를 기르고 번식시킬 수 있는 디지털 고양이 애완동물의 세계를 만들고 여러분의 고양이와 함께 모험의 세계에서 어깨를 나란히 하고 싸울 수 있습니다.","brief2":"DNAxCAT은 또한 플레이어가 소유권을 완전히 결정하는 경제로, 플레이어들이 자신의 게임 자산을 원활하게 판매하고 암호 화폐로 거래할 수 있게 해준다. DNAxCAT은 게임파이와 플레이 투 언 의 트렌드를 선도하고 있으며, 플레이어들은 게임을 함으로써 돈을 벌 수 있다."},"characters":{"title":"게임 캐릭터","viewMore":"더보기","element":"요소:","force":"힘:","bodyParts":"신체 부위","properties":"특성","skill":"스킬","meowKing":"야옹 킹덤","sakuraVill":"벚꽃 마을","meowDev":"야옹 마계","vitality":"활력","strength":"힘","defense":"방어","morale":"사기","agility":"민첩성"},"features":{"title":"특징들","title1":"Play 2 Earn","brief1":"자유롭게 게임을 하고, 게임을 통해 토큰을 벌고, 시장에서 거래할 수 있습니다.","title2":"소환","brief2":"두 마리 고양이에게 용감한 고양이를 소환하면 새로운 고양이들을 데리고 게임을 하거나 다른 플레이어들에게 팔 수 있다. 여러분의 선택입니다.","title3":"전람회","brief3":"독특하게 생긴 다양한 용감한 고양이들을 모아 소셜 플랫폼을 통해 친구들과 다른 플레이어들에게 보여주세요.","title4":"소셜","brief4":"250,000명 이상의 사용자와 대화하여 더 많은 게임 기술, 전략 및 경험을 얻을 수 있습니다.","title5":"탐험","brief5":"게임에서 적을 제거할 팀을 구성합니다. 모든 고양이는 유전적인 특성을 가지고 있고, 여러분의 고양이 팀을 잘 배치하고 여러분의 팀과 함께 보상을 획득하세요.","title6":"시즌","brief6":"시즌 모드에서 전투하고 더 많은 토큰 보상을 받으려면 높은 순위를 얻으십시오."},"token":{"title":"DNAxCAT 토큰","brief":"DNAxCAT 토큰(DXCT)은 DNAxCAT 메타버스의 거버넌스 통화입니다. 그것은 게임에서 영웅 고양이를 거래, 교환, 사육하는데 사용될 것이다."},"friends":{"title":"토큰 이코노믹"},"supporter":{"title":"전략적 지지자"},"economics":{"title1":"게임 내 통화","title2":"거버넌스","title3":"스테이킹","title4":"Play 2 Earn"}}')
    },
    8471: function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"Scarica APP","desc":"Usa l\'indirizzo del portafoglio (wallet) per registrarti e accedere per giocare"},"common":{"buyDXCT":"Acquista $DXCT","playNow":"Gioca ora"},"home":{"title":"GIOCO DEL METAVERSO DEL GATTO SU BLOCKCHAIN"},"about":{"title":"su DNAxCAT","brief1":"DNAxCAT crea un mondo digitale di animali domestici per gatti in cui i giocatori possono allevare e allevare una varietà di gatti carini e combattere spalla a spalla nel mondo dell\'avventura con i tuoi gatti.","brief2":"DNAxCAT è anche un\'economia in cui la proprietà è totalmente decisa dai giocatori, consentendo ai giocatori di vendere e scambiare senza problemi le proprie risorse di gioco in criptovaluta. DNAxCAT guida la tendenza di GameFi e Play To Earn, consentendo ai giocatori di guadagnare giocando."},"characters":{"title":"PERSONAGGI DEL GIOCO","viewMore":"Visualizza altro","element":"Elemento:","force":"Forza:","bodyParts":"Parti del corpo","properties":"Proprietà","skill":"Abilità","meowKing":"Meow Unito","sakuraVill":"Villaggio Sakura","meowDev":"Miao Devildom","vitality":"Vitalità","strength":"Forza","defense":"Difesa","morale":"Morale","agility":"Agilità"},"features":{"title":"CARATTERISTICHE","title1":"Gioca 2 Guadagna","brief1":"GRATIS PER GIOCARE, GIOCA PER GUADAGNARE, guadagnando gettoni giocando e poi scambiando sul mercato.","title2":"Convocare","brief2":"Evoca i gatti coraggiosi da due gatti qualsiasi e puoi prendere i nuovi gatti per giocare o venderli ad altri giocatori. Tocca a voi.","title3":"Mostra","brief3":"Colleziona una varietà di gatti coraggiosi dalla forma unica per mostrarli ai tuoi amici e ad altri giocatori attraverso le piattaforme social.","title4":"Sociale","brief4":"Comunica con più di 250.000 utenti per ottenere più abilità di gioco, strategie ed esperienza.","title5":"Spedizione","brief5":"Crea una squadra per eliminare i nemici nel gioco. Ogni gatto ha caratteristiche genetiche, organizza bene la tua squadra di gatti e vinci premi con la tua squadra.","title6":"Stagione","brief6":"Combatti nella modalità stagionale e cerca di ottenere un punteggio elevato per ottenere più ricompense in token."},"token":{"title":"DNAxCAT TOKEN","brief":"DNAxCAT Token (DXCT) è la valuta di governo di DNAxCAT Metaverse. Verrà utilizzato per il commercio, lo scambio e l\'allevamento di gatti eroi nel gioco."},"friends":{"title":"ECONOMIA DEI TOKEN"},"supporter":{"title":"SOSTENITORE STRATEGICO"},"economics":{"title1":"Valuta di gioco","title2":"Governance","title3":"Staking","title4":"Play 2 Earn"}}')
    },
    "85a9": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    8614: function(e, t, a) {},
    "87ef": function(e, t, a) {
        "use strict";
        a("a3a9")
    },
    "8c09": function(e, t, a) {},
    9109: function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"下載遊戲","desc":"使用錢包地址註冊和登錄并游玩游戏"},"common":{"buyDXCT":"購買$DXCT","playNow":"開始遊戲","gettingStarted":"新手入門"},"home":{"title":"區塊鏈上的 CAT Metaverse 遊戲"},"about":{"title":"關於 DNAxCAT","brief1":"DNAxCAT 創造了一個數字貓寵物世界，玩家可以在其中飼養和繁殖各種可愛的貓，並與您的貓在冒險世界中並肩作戰。","brief2":"DNAxCAT 也是一種所有權完全由玩家決定的經濟體，允許玩家無縫地將他們的遊戲資產出售和交易為加密貨幣。 DNAxCAT引領GameFi和“Play To Earn”的潮流，讓玩家通過玩遊戲賺錢。"},"characters":{"title":"遊戲角色","viewMore":"查看更多","element":"元素:","force":"勢力:","bodyParts":"身體部位","properties":"性格","skill":"技能","meowKing":"喵王國","sakuraVill":"櫻花村","meowDev":"喵魔界","vitality":"體力","strength":"力量","defense":"強度","morale":"士氣","agility":"敏捷"},"features":{"title":"FEATURES","title1":"Play To Earn","brief1":"免費玩，玩賺，透過玩遊戲賺取代幣，然後在市場上交易。","title2":"召唤","brief2":"任意兩隻喵召喚勇者喵，你可以帶著新的喵來玩遊戲或賣給其他玩家。由你決定。","title3":"展覽","brief3":"收集各種造型獨特的勇敢貓，通過社交平台向您的朋友和其他玩家展示它們。","title4":"社交","brief4":"與超過 250,000 名用戶交流以獲得更多遊戲技巧、策略和經驗。","title5":"冒險","brief5":"建立一個隊伍來消滅遊戲中的敵人。每隻貓都有遺傳特徵，好好安排你的貓團隊，和你的團隊一起贏取獎勵。","title6":"賽季","brief6":"在賽季模式中戰鬥，並嘗試獲得高排名以獲得更多令牌獎勵。"},"token":{"title":"DNAxCAT TOKEN","brief":"DNAxCAT Token(DXCT)是DNAxCAT元界的治理貨幣。它將用於遊戲中的交易、交換和繁殖英雄貓。"},"friends":{"title":"代幣經濟學"},"supporter":{"title":"戰略支持者"},"economics":{"title1":"遊戲代幣","title2":"小魚餅","title3":"質押","title4":"Play To Earn"}}')
    },
    "931d": function(e, t, a) {},
    "94de": function(e, t, a) {
        "use strict";
        a("327d")
    },
    "94f6": function(e, t, a) {
        e.exports = a.p + "img/about-left.dbf2e4a3.png"
    },
    "9a00": function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"APP İndir","desc":"Oyunu oynamak için kayıt olmak ve giriş yapmak için cüzdan adresini kullanın"},"common":{"buyDXCT":"$DXCT Satın al","playNow":"Şimdi oyna"},"home":{"title":"BLOCKCHAIN ​​ÜZERİNDE CAT METAVERSE OYUNU"},"about":{"title":"DNAXCAT Hakkında","brief1":"DNAxCAT, oyuncuların çeşitli sevimli kedileri yetiştirip üreyebileceği ve kedilerinizle macera dünyasında omuz omuza savaşabileceği dijital bir kedi evcil hayvan dünyası yaratır.","brief2":"DNAxCAT ayrıca, mülkiyetin tamamen oyuncular tarafından belirlendiği ve oyuncuların oyun varlıklarını kripto para birimine sorunsuz bir şekilde satmalarına ve takas etmelerine olanak tanıyan bir ekonomidir.  DNAxCAT, GameFi ve “Play To Earn” trendine öncülük ederek oyuncuların oyun oynayarak kazanmalarını sağlar."},"characters":{"title":"Oyunun karekterleri ","viewMore":"Daha çoğuna bakmak","element":"Araçlar:","force":"Kuvvet:","bodyParts":"Ana bölümler","properties":"Özellikler","skill":"Yetenekler","meowKing":"Miyav krallığı","sakuraVill":"Sakura köylüsü","meowDev":"Miyav şeytanı","vitality":"Canlılık","strength":"Güç","defense":"Savunma","morale":"Moral","agility":"Çeviklik"},"features":{"title":"Özellikler","title1":"Play 2 Earn","brief1":"OYNAMAK İÇİN ÜCRETSİZ, KAZANMAK İÇİN OYNAYIN, oyun oynayarak jeton kazanın ve ardından piyasada işlem yapın.","title2":"Çağırmak","brief2":"Herhangi iki kedi tarafından cesur kedileri çağırın ve oyunu oynamak için yeni kedileri alabilir veya diğer oyunculara satabilirsiniz.  O size kalmış.","title3":"Sergi","brief3":"Sosyal platformlar aracılığıyla arkadaşlarınıza ve diğer oyunculara göstermek için çeşitli benzersiz şekilli cesur kediler toplayın.","title4":"Sosyal","brief4":"Daha fazla oyun becerisi, stratejisi ve deneyimi elde etmek için 250.000\'den fazla kullanıcıyla iletişim kurun.","title5":"Expedition","brief5":"Oyundaki düşmanları ortadan kaldırmak için bir ekip oluşturun.  Her kedinin genetik özellikleri vardır, kedi ekibinizi iyi bir şekilde düzenleyin ve ekibinizle birlikte ödüller kazanın.","title6":"Sezon","brief6":"Sezon modunda savaşın ve daha fazla jeton ödülü almak için yüksek bir sıralama elde etmeye çalışın."},"token":{"title":"DNAxCAT TOKEN","brief":"DNAxCAT jetonu (DXCT), DNAxCAT Metaverse yönetişim para birimidir.  Oyunda kahraman kedileri takas etmek, takas etmek ve yetiştirmek için kullanılacaktır."},"friends":{"title":"Token ekonomisi"},"supporter":{"title":"Stratejik destek için"},"economics":{"title1":"Oyun İçi Para Birimi","title2":"Yönetim","title3":"Jeton yatırma","title4":"Play 2 Earn"}}')
    },
    "9a01": function(e, t, a) {
        e.exports = a.p + "img/supporter-cgc.ee2bc4e8.png"
    },
    "9a46": function(e, t, a) {
        e.exports = a.p + "img/icon-economics-3.89c86155.png"
    },
    "9b87": function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"i-download ang app","desc":"Gamiting ang wallet address para ito ay ma rehistro ang mag log-in para makalaro"},"common":{"buyDXCT":"Bumili ng $DXCT","playNow":"Pwede na laruin ang DNAxCAT"},"home":{"title":"CAT METAVERSE NA LARO SA BLOCKCHAIN"},"about":{"title":"Tungkol sa DNAxCAT","brief1":"Ang DNAxCAT ay nakakagawa ng digital na cat na hayop na kung saan ang mga manlalaro ay makaka palaki at gumawa ng ibat- ibang uri ng cute na cat, ang mga ito ay pwede mag laban sa isa\'t isa at makikipagsapalaran sa mundo ng mga cat","brief2":"Ang DNAxCAT ay nasa ekonomiya na kung saan ang mga may ari  ng mga cat ay mag dedesisyon, para ang mga manlalaro ay madaling makabenta at mag trade ng mga assets sa laro para maging cryptocurrency. ang DNAxCAT ang nangunguna sa GameFi at Play To Earn, at ang mga manlalaro ay pwedeng kumita sa paraan ng paglaro nito."},"characters":{"title":"Ang Mga Karakter sa Laro","viewMore":"Tignan pa","element":"Elemento","force":"Force","bodyParts":"Ibang bahagi ng katawan","properties":"ari-arian","skill":"Kasanayan","meowKing":"Meow na Mundo","sakuraVill":"Nayon ng Sakura","meowDev":"Meow Devildom","vitality":"Sigla","strength":"Lakas","defense":"Pagtatanggol","morale":"Moral","agility":"Liksi"},"features":{"title":"Pagmumukha","title1":"Maglaro para maka-earn","brief1":"Libre para maglaro, maglaro para maka-earn, ang pag earn ng token sa paglalari nito at mag trade sa market.","title2":"Ipatawag","brief2":"Ang Pagtawag/Summon ng mga Brave na Cat ay kailangan gumamit ng 2 na Cat and pwedeng gamitin ang mga bagong cat para malaro ito, o pwede itong ibenta sa ibang mga manlalaro. Kayo na ang bahala sa kung ano man na desisiyon na gagawin.","title3":"Exhibition","brief3":"Ang pag collect ng ibat ibang uri ng hugis ng brave cat ay pwede niying ipakita sa mga ibang mga kaibigan sa ibang mga social platforms.","title4":"Social","brief4":"Makipag usap sa higit na 250,000+ na manglalaro para maka kuha ng ibang mga karanasan sa laro, stretehiya at paglaro.","title5":"Eksibisyon","brief5":"Ang pag gawa ng gurpo para matalo ang mga kalaban sa laro. Lahat ng mga cat ay may mga genetic na katangian para makagawa ng magandang kaayusan ng team ng Cat at kayo ay mananalo sa pagawa nito.","title6":"Season","brief6":"Pwedeng mag laban sa season laban at makakuha ng mataas na ranking para makakuha ng mas madaming token na reward."},"token":{"title":"DNAxCAT TOKEN","brief":"Ang DNAxCAT na Token (DXCT) ay ang governance na token at currency na ginagamit sa NDAxCAT Metaverse. Ito ay gagamitin sa pag trade, pag-exchange at pag gawa ng mga Hero na Cat sa laro."},"friends":{"title":"Ekonomya ng Token"},"supporter":{"title":"Stratehiya ng Suporta"},"economics":{"title1":"Currecny na ginagamit sa laro","title2":"Governance","title3":"Pag-stake","title4":"Play 2 Earn"}}')
    },
    "9d9d": function(e, t, a) {
        "use strict";
        a("b6af")
    },
    "9e4f": function(e, t, a) {
        e.exports = a.p + "img/icon-economics-4.cf445c1d.png"
    },
    "9f5b": function(e, t, a) {
        "use strict";
        a("a40d")
    },
    a33e: function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"Скачать приложение","desc":"Используйте адрес кошелька для регистрации и авторизуйтесь, чтобы играть в игру."},"common":{"buyDXCT":"Купить  $DXCT","playNow":"Играть сейчас"},"home":{"title":"ИГРА CAT METAVERSE НА БЛОКЧЕЙНЕ"},"about":{"title":"О DNAxCAT","brief1":"DNAxCAT создает цифровой кошачий мир домашних животных, где игроки могут выращивать и разводить разных милых кошек и сражаться плечом к плечу в мире приключений со своими кошками.","brief2":"DNAxCAT - это также экономика, в которой право собственности полностью определяется игроками, что позволяет игрокам беспрепятственно продавать и обменивать свои игровые активы в криптовалюту. DNAxCAT возглавляет тренд GameFi и «Играй, чтобы заработать», позволяя игрокам зарабатывать, играя в игры."},"characters":{"title":"ИГРОВЫЕ ПЕРСОНАЖИ","viewMore":"Посмотреть больше","element":"Элемент:","force":"Сила:","bodyParts":"Части тела","properties":"Характеристики","skill":"Навыки","meowKing":"Королевство Мяу","sakuraVill":"Деревни сакуры","meowDev":"Мяу Девилдом","vitality":"Жизнеспособность","strength":"Сила","defense":"Защита","morale":"Мораль","agility":"Ловкость"},"features":{"title":"Особенности","title1":"Играть 2 Заработать","brief1":"ИГРАЙТЕ БЕСПЛАТНО, ИГРАЙТЕ, ЧТОБЫ ЗАРАБАТЫВАТЬ, зарабатывая токены, играя в игры, а затем торгуйте на рынке.","title2":"Вызывать","brief2":"Вызов отважных кошек любыми двумя кошками, и вы можете взять новых кошек, чтобы играть в игру, или продать их другим игрокам. Тебе решать.","title3":"Выставка","brief3":"Собирайте различных отважных кошек уникальной формы, чтобы показать их своим друзьям и другим игрокам через социальные сети.","title4":"Социальное","brief4":"Общайтесь с более чем 250 000+ пользователей, чтобы получить больше игровых навыков, стратегий и опыта.","title5":"Экспедиция","brief5":"Создайте команду для уничтожения врагов в игре. У каждой кошки есть генетические особенности, составьте хорошую организацию своей кошачьей команды и выигрывайте награды вместе со своей командой.","title6":"Сезон","brief6":"Сражайтесь в сезонном режиме и постарайтесь получить высокий рейтинг, чтобы получить больше токенов."},"token":{"title":"DNAxCAT ТОКЕН","brief":"Токен DNAxCAT (DXCT) - это управляющая валюта Метавселенной DNAxCAT. Он будет использоваться для торговли, обмена и разведения котов-героев в игре."},"friends":{"title":"ЭКОНОМИКА ТОКЕНОВ"},"supporter":{"title":"СТРАТЕГИЧЕСКАЯ ПОДДЕРЖКА"},"economics":{"title1":"Внутриигровая валюта","title2":"Управление","title3":"Стейкинг","title4":"Play 2 Earn"}}')
    },
    a3a9: function(e, t, a) {},
    a40d: function(e, t, a) {},
    a4bf: function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"ऐप डाउनलोड करें","desc":"रजिस्टर करने के लिए वॉलेट पते का उपयोग करें और गेम खेलने के लिए लॉग इन करें"},"common":{"buyDXCT":"$DXCT खरीदें","playNow":"अब खेलते हैं"},"home":{"title":"ब्लॉकचैन पर कैट मेटावर्स गेम"},"about":{"title":"DNAxCAT के बारे में","brief1":"DNAxCAT एक डिजिटल बिल्ली पालतू दुनिया बनाता है जहां खिलाड़ी अपनी बिल्लियों के साथ साहसिक दुनिया में प्यारी बिल्लियों और कंधे से कंधा मिलाकर अलग-अलग नस्लें उठा सकते हैं और प्रजनन कर सकते हैं।","brief2":"DNAxCAT भी एक ऐसी अर्थव्यवस्था है जिसमें स्वामित्व पूरी तरह से खिलाड़ियों द्वारा तय किया जाता है, जिससे खिलाड़ियों को अपनी खेल संपत्ति को क्रिप्टोकरेंसी में बेचने और व्यापार करने की अनुमति मिलती है।  DNAxCAT GameFi और \\"प्ले टू अर्न\\" की प्रवृत्ति का नेतृत्व करता है, जिससे खिलाड़ी गेम खेलकर कमाई कर सकते हैं।"},"characters":{"title":"खेल के पात्र","viewMore":"और देखो","element":"तत्व:","force":"बल:","bodyParts":"शरीर के अंग","properties":"गुण","skill":"कौशल","meowKing":"Meow  Kingdom","sakuraVill":"Sakura Village","meowDev":"म्याऊ शैतानी","vitality":"प्राण","strength":"ताकत","defense":"रक्षा","morale":"हौसला","agility":"चपलता"},"features":{"title":"विशेषताएं","title1":"प्ले 2 कमाएं","brief1":"खेलने के लिए स्वतंत्र, खेलने के लिए खेलने के लिए, गेम खेलकर टोकन अर्जित करें और फिर बाजार पर व्यापार करें।","title2":"बुलाने","brief2":"किसी भी दो बिल्लियों द्वारा बहादुर बिल्लियों को बुलाना और आप नई बिल्लियों को खेल खेलने के लिए ले जा सकते हैं या उन्हें अन्य खिलाड़ियों को बेच सकते हैं।  यह आप पर निर्भर करता है।","title3":"प्रदर्शनी","brief3":"सामाजिक प्लेटफार्मों के माध्यम से अपने दोस्तों और अन्य खिलाड़ियों को दिखाने के लिए विभिन्न प्रकार की विशिष्ट आकार की बहादुर बिल्लियों को इकट्ठा करें।","title4":"सामाजिक","brief4":"अधिक खेल कौशल, रणनीति और अनुभव प्राप्त करने के लिए 250,000+ से अधिक उपयोगकर्ताओं के साथ संवाद करें।","title5":"अभियान","brief5":"खेल में दुश्मनों को खत्म करने के लिए एक टीम बनाएं।  प्रत्येक बिल्ली में अनुवांशिक विशेषताएं होती हैं, अपनी बिल्लियों की टीम की अच्छी व्यवस्था करें और अपनी टीम के साथ पुरस्कार जीतें।","title6":"मौसम","brief6":"सीज़न मोड में लड़ाई करें और अधिक टोकन पुरस्कार प्राप्त करने के लिए उच्च रैंकिंग प्राप्त करने का प्रयास करें।"},"token":{"title":"DNAxCAT टोकन","brief":"DNAxCAT टोकन (DXCT) DNAxCAT मेटावर्स की शासन मुद्रा है।  इसका उपयोग खेल में हीरो बिल्लियों के व्यापार, आदान-प्रदान और प्रजनन के लिए किया जाएगा।"},"friends":{"title":"टोकन अर्थशास्त्र"},"supporter":{"title":"सामरिक समर्थक"},"economics":{"title1":"इन-गेम मुद्रा","title2":"शासन","title3":"स्टेकिन","title4":"प्ले 2 कमाएं"}}')
    },
    a899: function(e, t, a) {},
    b6af: function(e, t, a) {},
    bc20: function(e, t, a) {},
    bc57: function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"Descargar Aplicación","desc":"Use la dirección de la billetera para registrarse e iniciar sesión para jugar"},"common":{"buyDXCT":"Comprar $DXCT","playNow":"Jugar Ahora"},"home":{"title":"JUEGO METAVERSO DE GATO EN BLOCKCHAIN"},"about":{"title":"SOBRE DNAxCAT","brief1":"DNAxCAT crea un mundo digital de mascotas de gatos donde los jugadores pueden criar una variedad de lindos gatos y luchar hombro con hombro en el mundo de aventuras con sus gatos.","brief2":"DNAxCAT también es una economía en la que los jugadores deciden totalmente la propiedad, lo que permite a los jugadores vender e intercambiar sin problemas sus activos de juego en criptomonedas. DNAxCAT lidera la tendencia de GameFi y Play To Earn, lo que permite a los jugadores ganar jugando."},"characters":{"title":"PERSONAJES DEL JUEGO","viewMore":"Ver Más","element":"Elemento:","force":"Fuerza:","bodyParts":"Partes del Cuerpo","properties":"Propiedades","skill":"Habilidad","meowKing":"Reino de Miau","sakuraVill":"Aldea Sakura","meowDev":"Miau Devildom","vitality":"Resistencia","strength":"Defensa","defense":"DefeMoralnse","morale":"Moral","agility":"Agilidad"},"features":{"title":"CARACTERÍSTICAS","title1":"Jugar Para Ganar","brief1":"GRATIS PARA JUGAR, JUEGA PARA GANAR, gana fichas jugando y luego comercia en el mercado.","title2":"Invocar","brief2":"Invocando Brave Cats por dos gatos cualesquiera y puede llevar a los gatos nuevos para jugar o venderlos a otros jugadores. Tu decides.","title3":"Exhibición","brief3":"Colecciona una variedad de Brave Cats con formas únicas para mostrárselos a tus amigos y otros jugadores a través de las plataformas sociales.","title4":"Social","brief4":"Comuníquese con más de 250.000 usuarios para obtener más habilidades, estrategias y experiencia en el juego.","title5":"Expedición","brief5":"Forma un equipo para eliminar enemigos en el juego. Cada gato tiene características genéticas, haga un buen arreglo de su equipo de gatos y gane recompensas con su equipo.m.","title6":"Temporada","brief6":"Lucha en el modo temporada e intenta obtener una clasificación alta para obtener más tokens de recompensa."},"token":{"title":"TOKEN DNAxCAT","brief":"Token DNAxCAT (DXCT) es la moneda de gobernanza del Metaverso de DNAxCAT. Se utilizará para intercambiar y criar gatos héroes en el juego."},"friends":{"title":"ECONOMÍA DE TOKEN"},"supporter":{"title":"APOYO ESTRATÉGICO"},"economics":{"title1":"Moneda del Juego","title2":"Gobernanza","title3":"Apostar","title4":"Play 2 Earn"}}')
    },
    bcc4: function(e, t, a) {
        e.exports = a.p + "img/icon-social-medium.8bb0eadb.svg"
    },
    be1b: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    c0a9: function(e, t, a) {
        "use strict";
        a("8c09")
    },
    ce0d: function(e, t, a) {
        e.exports = a.p + "img/icon-social-telegram.305fde0c.svg"
    },
    d09c: function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"Unduh Aplikasi","desc":"Gunakan alamat dompet untuk mendaftar dan masuk untuk memainkan game"},"common":{"buyDXCT":"Beli $DXCT","playNow":"Mainkan Sekarang"},"home":{"title":"PERMAINAN METAVERSE KUCING DI BLOCKCHAIN"},"about":{"title":"TENTANG DNAxCAT","brief1":"DNAxCAT menciptakan dunia hewan peliharaan kucing digital di mana pemain dapat memelihara dan membiakkan berbagai kucing lucu dan bertarung bahu-membahu di dunia petualangan dengan kucing Anda.","brief2":"DNAxCAT juga merupakan ekonomi di mana kepemilikan sepenuhnya diputuskan oleh pemain, memungkinkan pemain untuk menjual dan memperdagangkan aset game mereka dengan lancar ke dalam cryptocurrency. DNAxCAT memimpin tren GameFi dan Play To Earn, yang memungkinkan pemain menghasilkan uang dengan bermain game."},"characters":{"title":"Karakter permainan","viewMore":"Lihat Lebih","element":"Element:","force":"Kekuatan:","bodyParts":"Bagian Tubuh","properties":"Properti","skill":"Skill","meowKing":"Kerajaan Meow","sakuraVill":"Desa Sakura","meowDev":"Meow Devildom","vitality":"Daya Tahan","strength":"Kekuatan","defense":"Pertahanan","morale":"Moral","agility":"Kelincahan"},"features":{"title":"Fitur","title1":"Bermain untuk menghasilkan","brief1":"GRATIS BERMAIN, BERMAIN UNTUK MENGHASILKAN, dapatkan token dengan bermain game, lalu berdagang di pasar.","title2":"Memanggil","brief2":"Memanggil kucing pemberani oleh dua kucing mana pun dan Anda dapat membawa kucing baru untuk bermain game atau menjualnya ke pemain lain. Terserah kamu.","title3":"Pertunjukan","brief3":"Kumpulkan berbagai kucing pemberani berbentuk unik untuk ditunjukkan kepada teman dan pemain lain melalui platform sosial.","title4":"Musim","brief4":"Berkomunikasi dengan lebih dari 250.000+ pengguna untuk mendapatkan lebih banyak keterampilan, strategi, dan pengalaman game.","title5":"Ekspedisi","brief5":"Bangun tim untuk melenyapkan musuh dalam game. Setiap kucing memiliki karakteristik genetik, atur tim kucing Anda dengan baik dan menangkan hadiah dengan tim Anda.","title6":"Season","brief6":"Bertarung dalam mode musim dan cobalah untuk mendapatkan peringkat tinggi untuk mendapatkan lebih banyak hadiah token."},"token":{"title":"TOKEN DNAxCAT","brief":"Token DNAxCAT (DXCT) adalah mata uang pemerintahan DNAxCAT Metaverse. Ini akan digunakan untuk berdagang, bertukar, dan membiakkan kucing pahlawan dalam game."},"friends":{"title":"EKONOMI TOKEN"},"supporter":{"title":"PENDUKUNG STRATEGIS"},"economics":{"title1":"Mata Uang dalam Game","title2":"Pemerintahan","title3":"Staking","title4":"Bermain untuk menghasilkan"}}')
    },
    d296: function(e, t, a) {
        e.exports = a.p + "img/yooshi-labs-bg-block.d0fc3889.png"
    },
    d6ce: function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"Lade App herunter","desc":"Verwenden Sie die Wallet-Adresse, um sich zu registrieren und sich anzumelden, um das Spiel zu spielen"},"common":{"buyDXCT":"Kaufen $DXCT","playNow":"Jetzt spielen"},"home":{"title":"CAT METAVERSE SPIEL AUF BLOCKCHAIN"},"about":{"title":"ÜBER DNAxCAT","brief1":"DNAxCAT erstellt eine digitale Katzenhaustierwelt, in der Spieler verschiedene süße Katzen aufziehen und züchten und in der Abenteuerwelt mit Ihren Katzen Schulter an Schulter kämpfen können.","brief2":"DNAxCAT ist auch eine Wirtschaft, in der das Eigentum vollständig von den Spielern bestimmt wird, was es den Spielern ermöglicht, ihre Spiel-Assets nahtlos in Kryptowährung zu verkaufen und einzutauschen. DNAxCAT führt den Trend von GameFi und “Spielen, um zu verdienen” an und ermöglicht es den Spielern, durch das Spielen von Spielen zu verdienen."},"characters":{"title":"SPIELCHARAKTERE","viewMore":"Mehr sehen","element":"Element::","force":"Macht:","bodyParts":"Körperteile","properties":"Eigenschaften","skill":"Fähigkeit","meowKing":"Miau Königreich","sakuraVill":"Sakura-Dorf","meowDev":"Meow Devildom","vitality":"Vitalität","strength":"Stärke","defense":"Verteidigung","morale":"Moral","agility":"Beweglichkeit"},"features":{"title":"MERKMALE","title1":"Spielen 2 Verdienen","brief1":"KOSTENLOS SPIELEN, SPIELEN, UM ZU VERDIENEN, Token durch Spielen zu verdienen und dann auf dem Markt zu handeln.","title2":"Beschwörung","brief2":"Beschwöre mutige Katzen mit zwei beliebigen Katzen und du kannst die neuen Katzen mitnehmen, um das Spiel zu spielen oder sie an andere Spieler zu verkaufen. Es liegt an Ihnen.","title3":"Exhibition","brief3":"Collect a variety of uniquely shaped brave cats to show them to your friends and other players through social platforms.","title4":"Sozial","brief4":"Kommunizieren Sie mit mehr als 250,000+ Benutzern, um mehr Spielfähigkeiten, Strategien und Erfahrungen zu erhalten.","title5":"Expedition","brief5":"Bilden Sie ein Team, um Feinde im Spiel zu eliminieren. Jede Katze hat genetische Eigenschaften, stellen Sie Ihr Katzenteam gut zusammen und gewinnen Sie mit Ihrem Team Belohnungen.","title6":"Saison","brief6":"Kämpfe im Saisonmodus und versuche, einen hohen Rang zu erreichen, um mehr Token-Belohnungen zu erhalten."},"token":{"title":"DNAxCAT TOKEN","brief":"DNAxCAT Token (DXCT) ist die Governance-Währung von DNAxCAT Metaverse. Es wird für den Handel, den Austausch und die Zucht von Heldenkatzen im Spiel verwendet."},"friends":{"title":"TOKEN-Ökonomie"},"supporter":{"title":"STRATEGISCHE UNTERSTÜTZUNG"},"economics":{"title1":"Währung im Spiel","title2":"Führung","title3":"Staking","title4":"Spielen 2 Verdienen"}}')
    },
    d8eb: function(e, t, a) {
        e.exports = a.p + "img/features-2.bc94a089.png"
    },
    d983: function(e, t, a) {
        e.exports = a.p + "img/email_icon.592668a0.svg"
    },
    e088: function(e) {
        e.exports = JSON.parse('{"downloadDialog":{"title":"Download APP","desc":"Use the wallet address to register and log in to play the game"},"common":{"buyDXCT":"Buy $DXCT","playNow":"Play Now","gettingStarted":"Getting Started"},"home":{"title":"CAT METAVERSE GAME ON BLOCKCHAIN"},"about":{"title":"ABOUT DNAxCAT","brief1":"DNAxCAT creates a digital cat pet world where players can raise and breed varies of cute cats and fight shoulder to shoulder in the adventure world with your cats.","brief2":"DNAxCAT is also an economy in which ownership is totally decided by players, allowing players to seamlessly sell and trade their game assets into cryptocurrency. DNAxCAT leads the trend of GameFi and “Play To Earn”, allowing players to earn by playing games."},"characters":{"title":"GAME CHARACTERS","viewMore":"View More","element":"Element:","force":"Force:","bodyParts":"Body Parts","properties":"Properties","skill":"Skill","meowKing":"Meow  Kingdom","sakuraVill":"Sakura Village","meowDev":"Meow Devildom","vitality":"Vitality","strength":"Strength","defense":"Defense","morale":"Morale","agility":"Agility"},"features":{"title":"FEATURES","title1":"Play 2 Earn","brief1":"FREE TO PLAY, PLAY TO EARN, earning tokens by playing games and then trade on the market.","title2":"Summon","brief2":"Summoning brave cats by any two cats and you can take the new cats to play the game or sell them to other players. It\'s up to you.","title3":"Exhibition","brief3":"Collect a variety of uniquely shaped brave cats to show them to your friends and other players through social platforms.","title4":"Social","brief4":"Communicate with more than 250,000+ users to get more game skills, strategies and experience.","title5":"Expedition","brief5":"Build a team to eliminate enemies in the game. Every cat has genetic characteristics, make a good arrangement of your cats team and win rewards with your team.","title6":"Season","brief6":"Battle in the season mode and try to get a high ranking to get more token rewards."},"token":{"title":"DNAxCAT TOKEN","brief":"DNAxCAT Token(DXCT) is the governance currency of DNAxCAT Metaverse. It will be used for trading, exchanging and breeding hero cats in the game."},"friends":{"title":"TOKEN ECONOMICS"},"supporter":{"title":"STRATEGIC SUPPORTER"},"economics":{"title1":"In-game Currency","title2":"Governance","title3":"Staking","title4":"Play 2 Earn"}}')
    },
    e24e: function(e, t, a) {},
    f412: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAACWCAMAAAB+W6gfAAABfVBMVEUAAAD/48j////////////////////////ftzL////////////////gtD7////////////////////////////htT7////guT/gtT7ftT/////////gtD7////////////gtD7////////htD7gtD7gtT7////////////htT7gtD7gtD7////////htD3///8+Pj7prz/////////////////gtD09PT3htD49PT3////hsz/////fs0FDQ0M8PDz////////////gtT3////////////ctTw8PDz////////////gtD7fsj3ds0D///9QUFDgtD7gtD7////gtT3gtD7gtD7////gtT48PDz///88PDzgtD7////gtD7////////////gsz/ktkDgtD7////gtD08PDzhtD7////////////htTzeuTo8PDzgtD7gtD49PT3////////hsz08PDzftTxCQkLhtT09PT08PDw+Pj7gtD7///88PDzkE4nQAAAAfHRSTlMAApAI4wTNDwWV+STp6J8WC4DexJxWVQjAR/Xvz2tIGvZlTjGwjX0S0peQg8a9QkE5C9jJNOCTjGZfOCIgFxDpsKmIU1AvKg74pIRxTz8eGAXywrl39N3U0tHBwaeRb15ZRDkc6sy/tqSYYj0ZFO3ItX96dVxPJh/h36Vz++VwJgAADRpJREFUeNrs2b1KxTAYxvEnF+Ao6iaok0tcDEFI1gwi0a3kArIVOpRyPniuXYvgV/VwhFNOX3h/U2nHP0nftPhL6Lt1s2oT1VGldtWsuz7gX6xrqBalcRZ7CpuxXqrO2yFkqKPKYbDe1TQ23IR98nUtGZ3VcouSrYtk2wXsZnwkS6/1Fij3hYzeYIehkMVCLZQd+ww7nkdGD7VgPjLaPx8m1gC1aKEyefwmO9IZqIUzY6eMiVyZdPsUwSfWaUHHqNOLEDbSTaoyaT8xbKKf3NH9U5Cf622IdFCCOMYBH0xh1flTFFNZPpN5Rj3/CRMi/ee1vgDl+bLqOhYocQo7YBRa6glCIMs2YLTRBShT4Qajhj2UQD0bvLGM+v9WpBxpATg9w0v1nq7REUYqywYITLqDCpUTA3pWKKEqe3R0mNvT0/3946PRz62H5thhTY+f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"
    },
    f4dd: function(e, t, a) {
        e.exports = a.p + "img/token-model-banner.75048015.png"
    },
    f523: function(e, t, a) {
        e.exports = a.p + "img/supporter-yooshi.e4056644.png"
    },
    f714: function(e, t, a) {
        e.exports = a.p + "img/icon-social-twitter.d3d13dd6.svg"
    },
    faa6: function(e, t, a) {
        e.exports = a.p + "img/features-3.95929377.png"
    }
});
