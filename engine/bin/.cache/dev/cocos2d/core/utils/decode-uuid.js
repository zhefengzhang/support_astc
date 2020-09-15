(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/utils/decode-uuid.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                'use strict';
        var Base64Values = require('./misc').BASE64_VALUES;
        var HexChars = '0123456789abcdef'.split('');
        var _t = [
            '',
            '',
            '',
            ''
        ];
        var UuidTemplate = _t.concat(_t, '-', _t, '-', _t, '-', _t, '-', _t, _t, _t);
        var Indices = UuidTemplate.map(function (x, i) {
            return x === '-' ? NaN : i;
        }).filter(isFinite);
        module.exports = function (base64) {
            if (base64.length !== 22) {
                return base64;
            }
            UuidTemplate[0] = base64[0];
            UuidTemplate[1] = base64[1];
            for (var i = 2, j = 2; i < 22; i += 2) {
                var lhs = Base64Values[base64.charCodeAt(i)];
                var rhs = Base64Values[base64.charCodeAt(i + 1)];
                UuidTemplate[Indices[j++]] = HexChars[lhs >> 2];
                UuidTemplate[Indices[j++]] = HexChars[(lhs & 3) << 2 | rhs >> 4];
                UuidTemplate[Indices[j++]] = HexChars[rhs & 15];
            }
            return UuidTemplate.join('');
        };
        if (CC_TEST) {
            cc._Test.decodeUuid = module.exports;
        }
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY29kZS11dWlkLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS91dGlscy9kZWNvZGUtdXVpZC5qcyJdLCJuYW1lcyI6WyJCYXNlNjRWYWx1ZXMiLCJyZXF1aXJlIiwiQkFTRTY0X1ZBTFVFUyIsIkhleENoYXJzIiwic3BsaXQiLCJfdCIsIlV1aWRUZW1wbGF0ZSIsImNvbmNhdCIsIkluZGljZXMiLCJtYXAiLCJ4IiwiaSIsIk5hTiIsImZpbHRlciIsImlzRmluaXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsImJhc2U2NCIsImxlbmd0aCIsImoiLCJsaHMiLCJjaGFyQ29kZUF0IiwicmhzIiwiam9pbiIsIkNDX1RFU1QiLCJjYyIsIl9UZXN0IiwiZGVjb2RlVXVpZCJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBMEJBLElBQUlBLFlBQUFBLEdBQWVDLE9BQUFBLENBQVEsUUFBUkEsRUFBa0JDLGFBQXJDO1FBRUEsSUFBSUMsUUFBQUEsR0FBVyxtQkFBbUJDLEtBQW5CLENBQXlCLEVBQXpCLENBQWY7UUFFQSxJQUFJQyxFQUFBQSxHQUFLO0FBQUEsWUFBQyxFQUFEO0FBQUEsWUFBSyxFQUFMO0FBQUEsWUFBUyxFQUFUO0FBQUEsWUFBYSxFQUFiO0FBQUEsU0FBVDtRQUNBLElBQUlDLFlBQUFBLEdBQWVELEVBQUFBLENBQUdFLE1BQUhGLENBQVVBLEVBQVZBLEVBQWMsR0FBZEEsRUFBbUJBLEVBQW5CQSxFQUF1QixHQUF2QkEsRUFBNEJBLEVBQTVCQSxFQUFnQyxHQUFoQ0EsRUFBcUNBLEVBQXJDQSxFQUF5QyxHQUF6Q0EsRUFBOENBLEVBQTlDQSxFQUFrREEsRUFBbERBLEVBQXNEQSxFQUF0REEsQ0FBbkI7UUFDQSxJQUFJRyxPQUFBQSxHQUFVRixZQUFBQSxDQUFhRyxHQUFiSCxDQUFpQixVQUFVSSxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFBQSxZQUFFLE9BQU9ELENBQUFBLEtBQU0sR0FBTkEsR0FBWUUsR0FBWkYsR0FBa0JDLENBQXpCLENBQUY7QUFBQSxTQUFqQ0wsRUFBa0VPLE1BQWxFUCxDQUF5RVEsUUFBekVSLENBQWQ7UUFHQVMsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUIsVUFBVUUsTUFBVixFQUFrQjtBQUFBLFlBQy9CLElBQUlBLE1BQUFBLENBQU9DLE1BQVBELEtBQWtCLEVBQXRCLEVBQTBCO0FBQUEsZ0JBQ3RCLE9BQU9BLE1BQVAsQ0FEc0I7QUFBQSxhQURLO0FBQUEsWUFJL0JYLFlBQUFBLENBQWEsQ0FBYkEsSUFBa0JXLE1BQUFBLENBQU8sQ0FBUEEsQ0FBbEJYLENBSitCO0FBQUEsWUFLL0JBLFlBQUFBLENBQWEsQ0FBYkEsSUFBa0JXLE1BQUFBLENBQU8sQ0FBUEEsQ0FBbEJYLENBTCtCO0FBQUEsWUFNL0IsS0FBSyxJQUFJSyxDQUFBQSxHQUFJLENBQVIsRUFBV1EsQ0FBQUEsR0FBSSxDQUFmLENBQUwsQ0FBdUJSLENBQUFBLEdBQUksRUFBM0IsRUFBK0JBLENBQUFBLElBQUssQ0FBcEMsRUFBdUM7QUFBQSxnQkFDbkMsSUFBSVMsR0FBQUEsR0FBTXBCLFlBQUFBLENBQWFpQixNQUFBQSxDQUFPSSxVQUFQSixDQUFrQk4sQ0FBbEJNLENBQWJqQixDQUFWLENBRG1DO0FBQUEsZ0JBRW5DLElBQUlzQixHQUFBQSxHQUFNdEIsWUFBQUEsQ0FBYWlCLE1BQUFBLENBQU9JLFVBQVBKLENBQWtCTixDQUFBQSxHQUFJLENBQXRCTSxDQUFiakIsQ0FBVixDQUZtQztBQUFBLGdCQUduQ00sWUFBQUEsQ0FBYUUsT0FBQUEsQ0FBUVcsQ0FBQUEsRUFBUlgsQ0FBYkYsSUFBNkJILFFBQUFBLENBQVNpQixHQUFBQSxJQUFPLENBQWhCakIsQ0FBN0JHLENBSG1DO0FBQUEsZ0JBSW5DQSxZQUFBQSxDQUFhRSxPQUFBQSxDQUFRVyxDQUFBQSxFQUFSWCxDQUFiRixJQUE2QkgsUUFBQUEsQ0FBV2lCLENBQUFBLEdBQUFBLEdBQU0sQ0FBTkEsQ0FBRCxJQUFhLENBQWIsR0FBa0JFLEdBQUFBLElBQU8sQ0FBbkNuQixDQUE3QkcsQ0FKbUM7QUFBQSxnQkFLbkNBLFlBQUFBLENBQWFFLE9BQUFBLENBQVFXLENBQUFBLEVBQVJYLENBQWJGLElBQTZCSCxRQUFBQSxDQUFTbUIsR0FBQUEsR0FBTSxFQUFmbkIsQ0FBN0JHLENBTG1DO0FBQUEsYUFOUjtBQUFBLFlBYS9CLE9BQU9BLFlBQUFBLENBQWFpQixJQUFiakIsQ0FBa0IsRUFBbEJBLENBQVAsQ0FiK0I7QUFBQSxTQUFuQ1M7UUFnQkEsSUFBSVMsT0FBSixFQUFhO0FBQUEsWUFDVEMsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBU0UsVUFBVEYsR0FBc0JWLE1BQUFBLENBQU9DLE9BQTdCUyxDQURTO0FBQUEiLCJmaWxlIjoiZGVjb2RlLXV1aWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBCYXNlNjRWYWx1ZXMgPSByZXF1aXJlKCcuL21pc2MnKS5CQVNFNjRfVkFMVUVTO1xuXG52YXIgSGV4Q2hhcnMgPSAnMDEyMzQ1Njc4OWFiY2RlZicuc3BsaXQoJycpO1xuXG52YXIgX3QgPSBbJycsICcnLCAnJywgJyddO1xudmFyIFV1aWRUZW1wbGF0ZSA9IF90LmNvbmNhdChfdCwgJy0nLCBfdCwgJy0nLCBfdCwgJy0nLCBfdCwgJy0nLCBfdCwgX3QsIF90KTtcbnZhciBJbmRpY2VzID0gVXVpZFRlbXBsYXRlLm1hcChmdW5jdGlvbiAoeCwgaSkgeyByZXR1cm4geCA9PT0gJy0nID8gTmFOIDogaTsgfSkuZmlsdGVyKGlzRmluaXRlKTtcblxuLy8gZmNtUjNYQUROTGdKMUJ5S2hxY0M1WiAtPiBmYzk5MWRkNy0wMDMzLTRiODAtOWQ0MS1jOGE4NmE3MDJlNTlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJhc2U2NCkge1xuICAgIGlmIChiYXNlNjQubGVuZ3RoICE9PSAyMikge1xuICAgICAgICByZXR1cm4gYmFzZTY0O1xuICAgIH1cbiAgICBVdWlkVGVtcGxhdGVbMF0gPSBiYXNlNjRbMF07XG4gICAgVXVpZFRlbXBsYXRlWzFdID0gYmFzZTY0WzFdO1xuICAgIGZvciAodmFyIGkgPSAyLCBqID0gMjsgaSA8IDIyOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGxocyA9IEJhc2U2NFZhbHVlc1tiYXNlNjQuY2hhckNvZGVBdChpKV07XG4gICAgICAgIHZhciByaHMgPSBCYXNlNjRWYWx1ZXNbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgVXVpZFRlbXBsYXRlW0luZGljZXNbaisrXV0gPSBIZXhDaGFyc1tsaHMgPj4gMl07XG4gICAgICAgIFV1aWRUZW1wbGF0ZVtJbmRpY2VzW2orK11dID0gSGV4Q2hhcnNbKChsaHMgJiAzKSA8PCAyKSB8IHJocyA+PiA0XTtcbiAgICAgICAgVXVpZFRlbXBsYXRlW0luZGljZXNbaisrXV0gPSBIZXhDaGFyc1tyaHMgJiAweEZdO1xuICAgIH1cbiAgICByZXR1cm4gVXVpZFRlbXBsYXRlLmpvaW4oJycpO1xufTtcblxuaWYgKENDX1RFU1QpIHtcbiAgICBjYy5fVGVzdC5kZWNvZGVVdWlkID0gbW9kdWxlLmV4cG9ydHM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIEJhc2U2NFZhbHVlcyA9IHJlcXVpcmUoJy4vbWlzYycpLkJBU0U2NF9WQUxVRVM7XG5cbnZhciBIZXhDaGFycyA9ICcwMTIzNDU2Nzg5YWJjZGVmJy5zcGxpdCgnJyk7XG5cbnZhciBfdCA9IFsnJywgJycsICcnLCAnJ107XG52YXIgVXVpZFRlbXBsYXRlID0gX3QuY29uY2F0KF90LCAnLScsIF90LCAnLScsIF90LCAnLScsIF90LCAnLScsIF90LCBfdCwgX3QpO1xudmFyIEluZGljZXMgPSBVdWlkVGVtcGxhdGUubWFwKGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgcmV0dXJuIHggPT09ICctJyA/IE5hTiA6IGk7XG59KS5maWx0ZXIoaXNGaW5pdGUpO1xuXG4vLyBmY21SM1hBRE5MZ0oxQnlLaHFjQzVaIC0+IGZjOTkxZGQ3LTAwMzMtNGI4MC05ZDQxLWM4YTg2YTcwMmU1OVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYmFzZTY0KSB7XG4gICAgaWYgKGJhc2U2NC5sZW5ndGggIT09IDIyKSB7XG4gICAgICAgIHJldHVybiBiYXNlNjQ7XG4gICAgfVxuICAgIFV1aWRUZW1wbGF0ZVswXSA9IGJhc2U2NFswXTtcbiAgICBVdWlkVGVtcGxhdGVbMV0gPSBiYXNlNjRbMV07XG4gICAgZm9yICh2YXIgaSA9IDIsIGogPSAyOyBpIDwgMjI7IGkgKz0gMikge1xuICAgICAgICB2YXIgbGhzID0gQmFzZTY0VmFsdWVzW2Jhc2U2NC5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgdmFyIHJocyA9IEJhc2U2NFZhbHVlc1tiYXNlNjQuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICBVdWlkVGVtcGxhdGVbSW5kaWNlc1tqKytdXSA9IEhleENoYXJzW2xocyA+PiAyXTtcbiAgICAgICAgVXVpZFRlbXBsYXRlW0luZGljZXNbaisrXV0gPSBIZXhDaGFyc1sobGhzICYgMykgPDwgMiB8IHJocyA+PiA0XTtcbiAgICAgICAgVXVpZFRlbXBsYXRlW0luZGljZXNbaisrXV0gPSBIZXhDaGFyc1tyaHMgJiAweEZdO1xuICAgIH1cbiAgICByZXR1cm4gVXVpZFRlbXBsYXRlLmpvaW4oJycpO1xufTtcblxuaWYgKENDX1RFU1QpIHtcbiAgICBjYy5fVGVzdC5kZWNvZGVVdWlkID0gbW9kdWxlLmV4cG9ydHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVJsWTI5a1pTMTFkV2xrTG1weklsMHNJbTVoYldWeklqcGJJa0poYzJVMk5GWmhiSFZsY3lJc0luSmxjWFZwY21VaUxDSkNRVk5GTmpSZlZrRk1WVVZUSWl3aVNHVjRRMmhoY25NaUxDSnpjR3hwZENJc0lsOTBJaXdpVlhWcFpGUmxiWEJzWVhSbElpd2lZMjl1WTJGMElpd2lTVzVrYVdObGN5SXNJbTFoY0NJc0luZ2lMQ0pwSWl3aVRtRk9JaXdpWm1sc2RHVnlJaXdpYVhOR2FXNXBkR1VpTENKdGIyUjFiR1VpTENKbGVIQnZjblJ6SWl3aVltRnpaVFkwSWl3aWJHVnVaM1JvSWl3aWFpSXNJbXhvY3lJc0ltTm9ZWEpEYjJSbFFYUWlMQ0p5YUhNaUxDSnFiMmx1SWl3aVEwTmZWRVZUVkNJc0ltTmpJaXdpWDFSbGMzUWlMQ0prWldOdlpHVlZkV2xrSWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFUQkNRU3hKUVVGSlFTeGxRVUZsUXl4UlFVRlJMRkZCUVZJc1JVRkJhMEpETEdGQlFYSkRPenRCUVVWQkxFbEJRVWxETEZkQlFWY3NiVUpCUVcxQ1F5eExRVUZ1UWl4RFFVRjVRaXhGUVVGNlFpeERRVUZtT3p0QlFVVkJMRWxCUVVsRExFdEJRVXNzUTBGQlF5eEZRVUZFTEVWQlFVc3NSVUZCVEN4RlFVRlRMRVZCUVZRc1JVRkJZU3hGUVVGaUxFTkJRVlE3UVVGRFFTeEpRVUZKUXl4bFFVRmxSQ3hIUVVGSFJTeE5RVUZJTEVOQlFWVkdMRVZCUVZZc1JVRkJZeXhIUVVGa0xFVkJRVzFDUVN4RlFVRnVRaXhGUVVGMVFpeEhRVUYyUWl4RlFVRTBRa0VzUlVGQk5VSXNSVUZCWjBNc1IwRkJhRU1zUlVGQmNVTkJMRVZCUVhKRExFVkJRWGxETEVkQlFYcERMRVZCUVRoRFFTeEZRVUU1UXl4RlFVRnJSRUVzUlVGQmJFUXNSVUZCYzBSQkxFVkJRWFJFTEVOQlFXNUNPMEZCUTBFc1NVRkJTVWNzVlVGQlZVWXNZVUZCWVVjc1IwRkJZaXhEUVVGcFFpeFZRVUZWUXl4RFFVRldMRVZCUVdGRExFTkJRV0lzUlVGQlowSTdRVUZCUlN4WFFVRlBSQ3hOUVVGTkxFZEJRVTRzUjBGQldVVXNSMEZCV2l4SFFVRnJRa1FzUTBGQmVrSTdRVUZCTmtJc1EwRkJhRVVzUlVGQmEwVkZMRTFCUVd4RkxFTkJRWGxGUXl4UlFVRjZSU3hEUVVGa096dEJRVVZCTzBGQlEwRkRMRTlCUVU5RExFOUJRVkFzUjBGQmFVSXNWVUZCVlVNc1RVRkJWaXhGUVVGclFqdEJRVU12UWl4UlFVRkpRU3hQUVVGUFF5eE5RVUZRTEV0QlFXdENMRVZCUVhSQ0xFVkJRVEJDTzBGQlEzUkNMR1ZCUVU5RUxFMUJRVkE3UVVGRFNEdEJRVU5FV0N4cFFrRkJZU3hEUVVGaUxFbEJRV3RDVnl4UFFVRlBMRU5CUVZBc1EwRkJiRUk3UVVGRFFWZ3NhVUpCUVdFc1EwRkJZaXhKUVVGclFsY3NUMEZCVHl4RFFVRlFMRU5CUVd4Q08wRkJRMEVzVTBGQlN5eEpRVUZKVGl4SlFVRkpMRU5CUVZJc1JVRkJWMUVzU1VGQlNTeERRVUZ3UWl4RlFVRjFRbElzU1VGQlNTeEZRVUV6UWl4RlFVRXJRa0VzUzBGQlN5eERRVUZ3UXl4RlFVRjFRenRCUVVOdVF5eFpRVUZKVXl4TlFVRk5jRUlzWVVGQllXbENMRTlCUVU5SkxGVkJRVkFzUTBGQmEwSldMRU5CUVd4Q0xFTkJRV0lzUTBGQlZqdEJRVU5CTEZsQlFVbFhMRTFCUVUxMFFpeGhRVUZoYVVJc1QwRkJUMGtzVlVGQlVDeERRVUZyUWxZc1NVRkJTU3hEUVVGMFFpeERRVUZpTEVOQlFWWTdRVUZEUVV3c2NVSkJRV0ZGTEZGQlFWRlhMRWRCUVZJc1EwRkJZaXhKUVVFMlFtaENMRk5CUVZOcFFpeFBRVUZQTEVOQlFXaENMRU5CUVRkQ08wRkJRMEZrTEhGQ1FVRmhSU3hSUVVGUlZ5eEhRVUZTTEVOQlFXSXNTVUZCTmtKb1FpeFRRVUZWTEVOQlFVTnBRaXhOUVVGTkxFTkJRVkFzUzBGQllTeERRVUZrTEVkQlFXMUNSU3hQUVVGUExFTkJRVzVETEVOQlFUZENPMEZCUTBGb1FpeHhRa0ZCWVVVc1VVRkJVVmNzUjBGQlVpeERRVUZpTEVsQlFUWkNhRUlzVTBGQlUyMUNMRTFCUVUwc1IwRkJaaXhEUVVFM1FqdEJRVU5JTzBGQlEwUXNWMEZCVDJoQ0xHRkJRV0ZwUWl4SlFVRmlMRU5CUVd0Q0xFVkJRV3hDTEVOQlFWQTdRVUZEU0N4RFFXUkVPenRCUVdkQ1FTeEpRVUZKUXl4UFFVRktMRVZCUVdFN1FVRkRWRU1zVDBGQlIwTXNTMEZCU0N4RFFVRlRReXhWUVVGVUxFZEJRWE5DV2l4UFFVRlBReXhQUVVFM1FqdEJRVU5JSWl3aVptbHNaU0k2SW1SbFkyOWtaUzExZFdsa0xtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVE10TWpBeE5pQkRhSFZyYjI1bklGUmxZMmh1YjJ4dloybGxjeUJKYm1NdVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTNMVEl3TVRnZ1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVYRzVjYmlCb2RIUndjem92TDNkM2R5NWpiMk52Y3k1amIyMHZYRzVjYmlCUVpYSnRhWE56YVc5dUlHbHpJR2hsY21WaWVTQm5jbUZ1ZEdWa0xDQm1jbVZsSUc5bUlHTm9ZWEpuWlN3Z2RHOGdZVzU1SUhCbGNuTnZiaUJ2WW5SaGFXNXBibWNnWVNCamIzQjVYRzRnYjJZZ2RHaHBjeUJ6YjJaMGQyRnlaU0JoYm1RZ1lYTnpiMk5wWVhSbFpDQmxibWRwYm1VZ2MyOTFjbU5sSUdOdlpHVWdLSFJvWlNCY0lsTnZablIzWVhKbFhDSXBMQ0JoSUd4cGJXbDBaV1FzWEc0Z0lIZHZjbXhrZDJsa1pTd2djbTk1WVd4MGVTMW1jbVZsTENCdWIyNHRZWE56YVdkdVlXSnNaU3dnY21WMmIyTmhZbXhsSUdGdVpDQnViMjR0WlhoamJIVnphWFpsSUd4cFkyVnVjMlZjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4dUlDQnViM1FnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5bWRIZGhjbVVnWm05eUlHUmxkbVZzYjNCcGJtY2diM1JvWlhJZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2RHaGhkQ2R6WEc0Z0lIVnpaV1FnWm05eUlHUmxkbVZzYjNCcGJtY2daMkZ0WlhNdUlGbHZkU0JoY21VZ2JtOTBJR2R5WVc1MFpXUWdkRzhnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN4Y2JpQWdjM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlFTnZZMjl6SUVOeVpXRjBiM0l1WEc1Y2JpQlVhR1VnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nYVc0Z2RHaHBjeUJNYVdObGJuTmxJRUZuY21WbGJXVnVkQ0JoY21VZ2JHbGpaVzV6WldRc0lHNXZkQ0J6YjJ4a0xseHVJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlCeVpYTmxjblpsY3lCaGJHd2djbWxuYUhSeklHNXZkQ0JsZUhCeVpYTnpiSGtnWjNKaGJuUmxaQ0IwYnlCNWIzVXVYRzVjYmlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVElFOVNYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh1SUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4dUlGUklSU0JUVDBaVVYwRlNSUzVjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh1WEc1MllYSWdRbUZ6WlRZMFZtRnNkV1Z6SUQwZ2NtVnhkV2x5WlNnbkxpOXRhWE5qSnlrdVFrRlRSVFkwWDFaQlRGVkZVenRjYmx4dWRtRnlJRWhsZUVOb1lYSnpJRDBnSnpBeE1qTTBOVFkzT0RsaFltTmtaV1luTG5Od2JHbDBLQ2NuS1R0Y2JseHVkbUZ5SUY5MElEMGdXeWNuTENBbkp5d2dKeWNzSUNjblhUdGNiblpoY2lCVmRXbGtWR1Z0Y0d4aGRHVWdQU0JmZEM1amIyNWpZWFFvWDNRc0lDY3RKeXdnWDNRc0lDY3RKeXdnWDNRc0lDY3RKeXdnWDNRc0lDY3RKeXdnWDNRc0lGOTBMQ0JmZENrN1hHNTJZWElnU1c1a2FXTmxjeUE5SUZWMWFXUlVaVzF3YkdGMFpTNXRZWEFvWm5WdVkzUnBiMjRnS0hnc0lHa3BJSHNnY21WMGRYSnVJSGdnUFQwOUlDY3RKeUEvSUU1aFRpQTZJR2s3SUgwcExtWnBiSFJsY2locGMwWnBibWwwWlNrN1hHNWNiaTh2SUdaamJWSXpXRUZFVGt4blNqRkNlVXRvY1dORE5Wb2dMVDRnWm1NNU9URmtaRGN0TURBek15MDBZamd3TFRsa05ERXRZemhoT0RaaE56QXlaVFU1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUNoaVlYTmxOalFwSUh0Y2JpQWdJQ0JwWmlBb1ltRnpaVFkwTG14bGJtZDBhQ0FoUFQwZ01qSXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0poYzJVMk5EdGNiaUFnSUNCOVhHNGdJQ0FnVlhWcFpGUmxiWEJzWVhSbFd6QmRJRDBnWW1GelpUWTBXekJkTzF4dUlDQWdJRlYxYVdSVVpXMXdiR0YwWlZzeFhTQTlJR0poYzJVMk5Gc3hYVHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTWl3Z2FpQTlJREk3SUdrZ1BDQXlNanNnYVNBclBTQXlLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnNhSE1nUFNCQ1lYTmxOalJXWVd4MVpYTmJZbUZ6WlRZMExtTm9ZWEpEYjJSbFFYUW9hU2xkTzF4dUlDQWdJQ0FnSUNCMllYSWdjbWh6SUQwZ1FtRnpaVFkwVm1Gc2RXVnpXMkpoYzJVMk5DNWphR0Z5UTI5a1pVRjBLR2tnS3lBeEtWMDdYRzRnSUNBZ0lDQWdJRlYxYVdSVVpXMXdiR0YwWlZ0SmJtUnBZMlZ6VzJvcksxMWRJRDBnU0dWNFEyaGhjbk5iYkdoeklENCtJREpkTzF4dUlDQWdJQ0FnSUNCVmRXbGtWR1Z0Y0d4aGRHVmJTVzVrYVdObGMxdHFLeXRkWFNBOUlFaGxlRU5vWVhKeld5Z29iR2h6SUNZZ015a2dQRHdnTWlrZ2ZDQnlhSE1nUGo0Z05GMDdYRzRnSUNBZ0lDQWdJRlYxYVdSVVpXMXdiR0YwWlZ0SmJtUnBZMlZ6VzJvcksxMWRJRDBnU0dWNFEyaGhjbk5iY21oeklDWWdNSGhHWFR0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlGVjFhV1JVWlcxd2JHRjBaUzVxYjJsdUtDY25LVHRjYm4wN1hHNWNibWxtSUNoRFExOVVSVk5VS1NCN1hHNGdJQ0FnWTJNdVgxUmxjM1F1WkdWamIyUmxWWFZwWkNBOUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dWZWeHVJbDE5Il19