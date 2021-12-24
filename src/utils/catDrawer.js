
var Ze, Je, He, Xe, $e, et, tt, at, it, nt, ot, rt, lt = "/cat/", st = !0, ct = 3, dt = 0, mt = 0, ut = null, gt = !1, ft = !0, pt = [], At = function () { };
const ht = require('./cat-config.json');

const catData = {
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
};

function kt(e, t, a) {
    Ze = t,
        ut = e,
        At = a,
        Je = new ut.webgl.Matrix4;
    var i = {
        alpha: !0
    };
    He = Ze.getContext("webgl", i) || Ze.getContext("experimental-webgl", i),
        He.clearColor(0, 0, 0, 0),
        He.clear(He.COLOR_BUFFER_BIT);
    He && (Xe = ut.webgl.Shader.newTwoColoredTextured(He),
        $e = new ut.webgl.PolygonBatcher(He),
        Je.ortho2d(0, 0, Ze.width - 1, Ze.height - 1),
        tt = new ut.webgl.SkeletonRenderer(He),
        at = new ut.webgl.AssetManager(He))
}

// 加载atlas文件
function vt(e) {
    if (it) {
        var t = ht.db_face_res[pt.face];
        return "".concat(lt, "assets/combine_cat/c").concat(t.color_id, "/hero_cat.atlas.txt")
    }
    return `cats/${e}/${e}.atlas.txt`
}
// 加载json文件
function yt(e) {
    if (it) {
        var t = ht.db_face_res[pt.face];
        return "".concat(lt, "assets/combine_cat/c").concat(t.color_id, "/hero_cat.json")
    }
    return `cats/${e}/${e}.json`
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
    var a = e.findIndex((function (e) {
        return e.data.name === t
    }
    ));
    return a >= 0 && e[a].attachment
}
function Tt(e, t, a) {
    ht.db_skill_cat_part_slot[t] && ht.db_skill_cat_part_slot[t].forEach((function (t) {
        var i = wt(e, t);
        i instanceof ut.MeshAttachment ? t !== a && (i.region.u = 0,
            i.region.u2 = 0,
            i.region.v = 0,
            i.region.v2 = 0,
            i.color = new ut.Color(1, 1, 1, t === a ? 1 : 0),
            i.updateUVs()) : i.color = new ut.Color(1, 1, 1, t === a ? 1 : 0)
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
        pt.skinPart.forEach((function (e) {
            var t = ht.db_cat_skin_part[e];
            if (1 === t.part && t.piece_name.length < 5) {
                var a = wt(s.slots, "Earfur_L")
                    , i = wt(s.slots, "Earfur_R");
                a.color = new ut.Color(1, 1, 1, 0),
                    i.color = new ut.Color(1, 1, 1, 0)
            }
            t.piece_name.forEach((function (e) {
                xt(s.slots, e[0], e[1])
            }
            ))
        }
        ));
        var d = ht.db_face_res[pt.face].piece_name;
        xt(s.slots, d[0], d[1]),
            Object.keys(ht.db_skill_cat_part_slot).forEach((function (e) {
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
            p.color = new ut.Color(1, 1, 1, 0);
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
    at.loadText(yt(nt));
    at.loadTextureAtlas(vt(nt));
    requestAnimationFrame(qt);
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
function Qt(e, t, a, i) {
    return Ot.apply(this, arguments);
}
function Ot(t, a, i, n) {
    kt(window.spine, t, n),
        st = !1,
        "genesis" === a ? Ut(catData[i]) : "brave" === a ? Rt(catData[i]) : (st = !0,
            n(!1));
}
function It() {
    st = !0,// true/false
        Je = null, //new ut.webgl.Matrix4;
        He = null, // Ze.getContext("webgl", i)
        Xe = null, // ut.webgl.Shader.newTwoColoredTextured(He)
        $e = null, //new ut.webgl.PolygonBatcher(He)
        tt = null, // new ut.webgl.SkeletonRenderer(He),
        at = null, // new ut.webgl.AssetManager(He))
        gt = !1
}

export default {
    init: Ot,
    reset: It
}


