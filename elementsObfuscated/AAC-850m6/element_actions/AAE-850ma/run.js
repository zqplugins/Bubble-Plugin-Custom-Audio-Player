function(instance, properties, context){
	function _0x8b76(_0x43cf25, _0x1a7806) {
    var _0x57f991 = _0x57f9();
    return _0x8b76 = function (_0x8b76b5, _0x26e38a) {
        _0x8b76b5 = _0x8b76b5 - 0x10c;
        var _0x5da739 = _0x57f991[_0x8b76b5];
        return _0x5da739;
    }, _0x8b76(_0x43cf25, _0x1a7806);
}
(function (_0x1ad6d4, _0x586194) {
    var _0x13d7e2 = _0x8b76, _0x25e868 = _0x1ad6d4();
    while (!![]) {
        try {
            var _0x217cca = parseInt(_0x13d7e2(0x120)) / 0x1 * (parseInt(_0x13d7e2(0x115)) / 0x2) + -parseInt(_0x13d7e2(0x11b)) / 0x3 + parseInt(_0x13d7e2(0x121)) / 0x4 * (parseInt(_0x13d7e2(0x10c)) / 0x5) + parseInt(_0x13d7e2(0x117)) / 0x6 * (-parseInt(_0x13d7e2(0x11e)) / 0x7) + -parseInt(_0x13d7e2(0x119)) / 0x8 * (-parseInt(_0x13d7e2(0x10f)) / 0x9) + parseInt(_0x13d7e2(0x11c)) / 0xa + parseInt(_0x13d7e2(0x11d)) / 0xb * (-parseInt(_0x13d7e2(0x11a)) / 0xc);
            if (_0x217cca === _0x586194)
                break;
            else
                _0x25e868['push'](_0x25e868['shift']());
        } catch (_0x27d162) {
            _0x25e868['push'](_0x25e868['shift']());
        }
    }
}(_0x57f9, 0x2a1f7));
function _0x57f9() {
    var _0x63acbc = [
        '99rwoNdH',
        '98GoYzKE',
        'pause',
        '428YGSHqm',
        '385196zOLJim',
        '10xuwvav',
        'play',
        'now',
        '1245897xjsIzo',
        'current_time',
        'querySelectorAll',
        'forEach',
        'audioElement',
        'isplaying',
        '554hMGInv',
        'currentTime',
        '110592mYNFaA',
        'data',
        '16WyLFFS',
        '481596ZNQBsk',
        '304818ypOJze',
        '3053660jHqUEE'
    ];
    _0x57f9 = function () {
        return _0x63acbc;
    };
    return _0x57f9();
}
function run(_0x4b1603, _0x1d1e8d, _0x416ea5) {
    var _0x1dac25 = _0x8b76;
    const _0x5349f5 = document[_0x1dac25(0x111)]('audio');
    _0x5349f5[_0x1dac25(0x112)](_0x14d8d4 => {
        var _0x4a96f9 = _0x1dac25;
        _0x14d8d4[_0x4a96f9(0x11f)]();
    }), _0x4b1603[_0x1dac25(0x118)]['now'] = _0x1dac25(0x10d), _0x4b1603[_0x1dac25(0x118)][_0x1dac25(0x113)][_0x1dac25(0x10d)](), _0x4b1603['publishState'](_0x1dac25(0x114), !![]);
    var _0x2dacab = setInterval(function () {
        var _0x23fe67 = _0x1dac25;
        if (_0x4b1603[_0x23fe67(0x118)][_0x23fe67(0x10e)] === 'play') {
            var _0x307cc1 = _0x4b1603[_0x23fe67(0x118)][_0x23fe67(0x113)][_0x23fe67(0x116)];
            _0x4b1603['publishState'](_0x23fe67(0x110), _0x4b1603['data']['getTime'](_0x307cc1)), _0x4b1603[_0x23fe67(0x118)]['slider']['value'] = _0x307cc1;
        } else
            clearInterval(_0x2dacab);
    }, 0x3e8);
}
	 run(instance, properties, context);
}