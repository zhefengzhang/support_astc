(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/mesh/mesh-data.js';
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
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Primitive = exports.VertexBundle = exports.VertexFormat = exports.BufferRange = undefined;
        var _gfx = require('../../renderer/gfx');
        var _gfx2 = _interopRequireDefault(_gfx);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        var BufferRange = exports.BufferRange = cc.Class({
            name: 'cc.BufferRange',
            properties: {
                offset: 0,
                length: 0
            }
        });
        var VertexFormat = exports.VertexFormat = cc.Class({
            name: 'cc.mesh.VertexFormat',
            properties: {
                name: '',
                type: -1,
                num: -1,
                normalize: false
            }
        });
        var VertexBundle = exports.VertexBundle = cc.Class({
            name: 'cc.mesh.VertexBundle',
            properties: {
                data: {
                    default: null,
                    type: BufferRange
                },
                formats: {
                    default: [],
                    type: VertexFormat
                },
                verticesCount: 0
            }
        });
        var Primitive = exports.Primitive = cc.Class({
            name: 'cc.mesh.Primitive',
            properties: {
                vertexBundleIndices: {
                    default: [],
                    type: Number
                },
                data: {
                    default: null,
                    type: BufferRange
                },
                indexUnit: _gfx2.default.INDEX_FMT_UINT16,
                topology: _gfx2.default.PT_TRIANGLES
            }
        });
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc2gtZGF0YS5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL2NvcmUvbWVzaC9tZXNoLWRhdGEuanMiXSwibmFtZXMiOlsiQnVmZmVyUmFuZ2UiLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJvZmZzZXQiLCJsZW5ndGgiLCJWZXJ0ZXhGb3JtYXQiLCJ0eXBlIiwibnVtIiwibm9ybWFsaXplIiwiVmVydGV4QnVuZGxlIiwiZGF0YSIsImRlZmF1bHQiLCJmb3JtYXRzIiwidmVydGljZXNDb3VudCIsIlByaW1pdGl2ZSIsInZlcnRleEJ1bmRsZUluZGljZXMiLCJOdW1iZXIiLCJpbmRleFVuaXQiLCJnZngiLCJJTkRFWF9GTVRfVUlOVDE2IiwidG9wb2xvZ3kiLCJQVF9UUklBTkdMRVMiXSwibWFwcGluZ3MiOiI7Ozs7OztRQXlCQSxVQUFBLE9BQUEsRUFBQTtBQUFBLDhEQUFBO0FBQUE7Ozs7Ozs7O1FBQUEsSUFBQSxJQUFBLEdBQUEsT0FBQSxDQUFBLG9CQUFBLENBQUE7Ozs7O1FBS08sSUFBSUEsV0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsV0FBQUEsR0FBY0MsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQzlCRSxJQUFBQSxFQUFNLGdCQUR3QjtBQUFBLFlBRzlCQyxVQUFBQSxFQUFZO0FBQUEsZ0JBS1JDLE1BQUFBLEVBQVEsQ0FMQTtBQUFBLGdCQVVSQyxNQUFBQSxFQUFRLENBVkE7QUFBQSxhQUhrQjtBQUFBLFNBQVRMLENBQWxCO1FBaUJBLElBQUlNLFlBQUFBLEdBQUFBLE9BQUFBLENBQUFBLFlBQUFBLEdBQWVOLEVBQUFBLENBQUdDLEtBQUhELENBQVM7QUFBQSxZQUMvQkUsSUFBQUEsRUFBTSxzQkFEeUI7QUFBQSxZQUcvQkMsVUFBQUEsRUFBWTtBQUFBLGdCQUNSRCxJQUFBQSxFQUFNLEVBREU7QUFBQSxnQkFFUkssSUFBQUEsRUFBTSxDQUFDLENBRkM7QUFBQSxnQkFHUkMsR0FBQUEsRUFBSyxDQUFDLENBSEU7QUFBQSxnQkFJUkMsU0FBQUEsRUFBVyxLQUpIO0FBQUEsYUFIbUI7QUFBQSxTQUFUVCxDQUFuQjtRQWdCQSxJQUFJVSxZQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxZQUFBQSxHQUFlVixFQUFBQSxDQUFHQyxLQUFIRCxDQUFTO0FBQUEsWUFDL0JFLElBQUFBLEVBQU0sc0JBRHlCO0FBQUEsWUFFL0JDLFVBQUFBLEVBQVk7QUFBQSxnQkFNUlEsSUFBQUEsRUFBTTtBQUFBLG9CQUNGQyxPQUFBQSxFQUFTLElBRFA7QUFBQSxvQkFFRkwsSUFBQUEsRUFBTVIsV0FGSjtBQUFBLGlCQU5FO0FBQUEsZ0JBY1JjLE9BQUFBLEVBQVM7QUFBQSxvQkFDTEQsT0FBQUEsRUFBUyxFQURKO0FBQUEsb0JBRUxMLElBQUFBLEVBQU1ELFlBRkQ7QUFBQSxpQkFkRDtBQUFBLGdCQXFCUlEsYUFBQUEsRUFBZSxDQXJCUDtBQUFBLGFBRm1CO0FBQUEsU0FBVGQsQ0FBbkI7UUErQkEsSUFBSWUsU0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBWWYsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQzVCRSxJQUFBQSxFQUFNLG1CQURzQjtBQUFBLFlBRTVCQyxVQUFBQSxFQUFZO0FBQUEsZ0JBS1JhLG1CQUFBQSxFQUFxQjtBQUFBLG9CQUNqQkosT0FBQUEsRUFBUyxFQURRO0FBQUEsb0JBRWpCTCxJQUFBQSxFQUFNVSxNQUZXO0FBQUEsaUJBTGI7QUFBQSxnQkFjUk4sSUFBQUEsRUFBTTtBQUFBLG9CQUNGQyxPQUFBQSxFQUFTLElBRFA7QUFBQSxvQkFFRkwsSUFBQUEsRUFBTVIsV0FGSjtBQUFBLGlCQWRFO0FBQUEsZ0JBc0JSbUIsU0FBQUEsRUFBV0MsS0FBQUEsQ0FBQUEsT0FBQUEsQ0FBSUMsZ0JBdEJQO0FBQUEsZ0JBMkJSQyxRQUFBQSxFQUFVRixLQUFBQSxDQUFBQSxPQUFBQSxDQUFJRyxZQTNCTjtBQUFBLGFBRmdCO0FBQUEsU0FBVHRCLENBQWhCOztJQW5FUCxJQUFBLE9BQUEsRUFBQTtBQUFBLHdEQUFBO0FBQUEsS0FBQSxNQUdXRDtBQUFBQSxRQUF1QixpQkFBQSxDQUFBLGtCQUFBLENBQUEsVUFBQSxFQUFBLFlBQUE7QUFBQSw0REFBQTtBQUFBLFNBQUEsRUFBdkJBO0FBQUFBIiwiZmlsZSI6Im1lc2gtZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwOi8vd3d3LmNvY29zLmNvbVxuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0IGdmeCBmcm9tICcuLi8uLi9yZW5kZXJlci9nZngnO1xuXG4vKipcbiAqIFRoZSBjbGFzcyBCdWZmZXJSYW5nZSBkZW5vdGVzIGEgcmFuZ2Ugb2YgdGhlIGJ1ZmZlci5cbiAqL1xuZXhwb3J0IGxldCBCdWZmZXJSYW5nZSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuQnVmZmVyUmFuZ2UnLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG9mZnNldCBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBvZmZzZXRcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsZW5ndGggb2YgdGhlIHJhbmdlLlxuICAgICAgICAgKiBAcHJvcGVydHkge051bWJlcn0gbGVuZ3RoXG4gICAgICAgICAqL1xuICAgICAgICBsZW5ndGg6IDBcbiAgICB9XG59KTtcblxuZXhwb3J0IGxldCBWZXJ0ZXhGb3JtYXQgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2NjLm1lc2guVmVydGV4Rm9ybWF0JyxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHR5cGU6IC0xLFxuICAgICAgICBudW06IC0xLFxuICAgICAgICBub3JtYWxpemU6IGZhbHNlXG4gICAgfVxufSk7XG5cbi8qKlxuICogQSB2ZXJ0ZXggYnVuZGxlIGRlc2NyaWJlcyBhIHNlcmlhbHMgb2YgdmVydGV4IGF0dHJpYnV0ZXMuXG4gKiBUaGVzZSB2ZXJ0ZXggYXR0cmlidXRlcyBvY2N1cHkgYSByYW5nZSBvZiB0aGUgYnVmZmVyIGFuZFxuICogYXJlIGludGVybGVhdmVkLCBubyBwYWRkaW5nIGJ5dGVzLCBpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBsZXQgVmVydGV4QnVuZGxlID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5tZXNoLlZlcnRleEJ1bmRsZScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRhdGEgcmFuZ2Ugb2YgdGhpcyBidW5kbGUuXG4gICAgICAgICAqIFRoaXMgcmFuZ2Ugb2YgZGF0YSBpcyBlc3NlbnRpYWxseSBtYXBwZWQgdG8gYSBHUFUgdmVydGV4IGJ1ZmZlci5cbiAgICAgICAgICogQHByb3BlcnR5IHtCdWZmZXJSYW5nZX0gZGF0YVxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IEJ1ZmZlclJhbmdlXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYXR0cmlidXRlIGZvcm1hdHMuXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7VmVydGV4Rm9ybWF0fSBmb3JtYXRzXG4gICAgICAgICAqL1xuICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFZlcnRleEZvcm1hdFxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJ1bmRsZSdzIHZlcnRpY2VzIGNvdW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdmVydGljZXNDb3VudDogMCxcbiAgICB9XG59KTtcblxuLyoqXG4gKiBBIHByaW1pdGl2ZSBpcyBhIGdlb21ldHJ5IGNvbnN0aXR1dGVkIHdpdGggYSBsaXN0IG9mXG4gKiBzYW1lIHRvcG9sb2d5IHByaW1pdGl2ZSBncmFwaGljKHN1Y2ggYXMgcG9pbnRzLCBsaW5lcyBvciB0cmlhbmdsZXMpLlxuICovXG5leHBvcnQgbGV0IFByaW1pdGl2ZSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MubWVzaC5QcmltaXRpdmUnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2ZXJ0ZXggYnVuZGxlIHRoYXQgdGhlIHByaW1pdGl2ZSB1c2UuXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7W051bWJlcl19IHZlcnRleEJ1bmRsZUluZGljZXNcbiAgICAgICAgICovXG4gICAgICAgIHZlcnRleEJ1bmRsZUluZGljZXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGF0YSByYW5nZSBvZiB0aGUgcHJpbWl0aXZlLlxuICAgICAgICAgKiBUaGlzIHJhbmdlIG9mIGRhdGEgaXMgZXNzZW50aWFsbHkgbWFwcGVkIHRvIGEgR1BVIGluZGljZXMgYnVmZmVyLlxuICAgICAgICAgKiBAcHJvcGVydHkge0J1ZmZlclJhbmdlfSBkYXRhXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogQnVmZmVyUmFuZ2VcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIHRoaXMgcHJpbWl0aXZlJ3MgaW5kaWNlcy5cbiAgICAgICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGluZGV4VW5pdFxuICAgICAgICAgKi9cbiAgICAgICAgaW5kZXhVbml0OiBnZnguSU5ERVhfRk1UX1VJTlQxNixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcmltaXRpdmUncyB0b3BvbG9neS5cbiAgICAgICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHRvcG9sb2d5XG4gICAgICAgICAqL1xuICAgICAgICB0b3BvbG9neTogZ2Z4LlBUX1RSSUFOR0xFU1xuICAgIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QcmltaXRpdmUgPSBleHBvcnRzLlZlcnRleEJ1bmRsZSA9IGV4cG9ydHMuVmVydGV4Rm9ybWF0ID0gZXhwb3J0cy5CdWZmZXJSYW5nZSA9IHVuZGVmaW5lZDtcblxudmFyIF9nZnggPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9nZngnKTtcblxudmFyIF9nZngyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2Z4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGUgY2xhc3MgQnVmZmVyUmFuZ2UgZGVub3RlcyBhIHJhbmdlIG9mIHRoZSBidWZmZXIuXG4gKi9cbnZhciBCdWZmZXJSYW5nZSA9IGV4cG9ydHMuQnVmZmVyUmFuZ2UgPSBjYy5DbGFzcyh7XG4gIG5hbWU6ICdjYy5CdWZmZXJSYW5nZScsXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBvZmZzZXQgb2YgdGhlIHJhbmdlLlxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBvZmZzZXRcbiAgICAgKi9cbiAgICBvZmZzZXQ6IDAsXG4gICAgLyoqXG4gICAgICogVGhlIGxlbmd0aCBvZiB0aGUgcmFuZ2UuXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGxlbmd0aFxuICAgICAqL1xuICAgIGxlbmd0aDogMFxuICB9XG59KTsgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG4gICAgXG4gICAgIGh0dHA6Ly93d3cuY29jb3MuY29tXG4gICAgXG4gICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgICAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gICAgICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gICAgIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gICAgICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gICAgICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gICAgICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cbiAgICBcbiAgICAgVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiAgICAgWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cbiAgICBcbiAgICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gICAgIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgICAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgICAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICAgICBUSEUgU09GVFdBUkUuXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBWZXJ0ZXhGb3JtYXQgPSBleHBvcnRzLlZlcnRleEZvcm1hdCA9IGNjLkNsYXNzKHtcbiAgbmFtZTogJ2NjLm1lc2guVmVydGV4Rm9ybWF0JyxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbmFtZTogJycsXG4gICAgdHlwZTogLTEsXG4gICAgbnVtOiAtMSxcbiAgICBub3JtYWxpemU6IGZhbHNlXG4gIH1cbn0pO1xuXG4vKipcbiAqIEEgdmVydGV4IGJ1bmRsZSBkZXNjcmliZXMgYSBzZXJpYWxzIG9mIHZlcnRleCBhdHRyaWJ1dGVzLlxuICogVGhlc2UgdmVydGV4IGF0dHJpYnV0ZXMgb2NjdXB5IGEgcmFuZ2Ugb2YgdGhlIGJ1ZmZlciBhbmRcbiAqIGFyZSBpbnRlcmxlYXZlZCwgbm8gcGFkZGluZyBieXRlcywgaW4gdGhlIHJhbmdlLlxuICovXG52YXIgVmVydGV4QnVuZGxlID0gZXhwb3J0cy5WZXJ0ZXhCdW5kbGUgPSBjYy5DbGFzcyh7XG4gIG5hbWU6ICdjYy5tZXNoLlZlcnRleEJ1bmRsZScsXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSByYW5nZSBvZiB0aGlzIGJ1bmRsZS5cbiAgICAgKiBUaGlzIHJhbmdlIG9mIGRhdGEgaXMgZXNzZW50aWFsbHkgbWFwcGVkIHRvIGEgR1BVIHZlcnRleCBidWZmZXIuXG4gICAgICogQHByb3BlcnR5IHtCdWZmZXJSYW5nZX0gZGF0YVxuICAgICAqL1xuICAgIGRhdGE6IHtcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB0eXBlOiBCdWZmZXJSYW5nZVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGF0dHJpYnV0ZSBmb3JtYXRzLlxuICAgICAqIEBwcm9wZXJ0eSB7VmVydGV4Rm9ybWF0fSBmb3JtYXRzXG4gICAgICovXG4gICAgZm9ybWF0czoge1xuICAgICAgZGVmYXVsdDogW10sXG4gICAgICB0eXBlOiBWZXJ0ZXhGb3JtYXRcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBidW5kbGUncyB2ZXJ0aWNlcyBjb3VudC5cbiAgICAgKi9cbiAgICB2ZXJ0aWNlc0NvdW50OiAwXG4gIH1cbn0pO1xuXG4vKipcbiAqIEEgcHJpbWl0aXZlIGlzIGEgZ2VvbWV0cnkgY29uc3RpdHV0ZWQgd2l0aCBhIGxpc3Qgb2ZcbiAqIHNhbWUgdG9wb2xvZ3kgcHJpbWl0aXZlIGdyYXBoaWMoc3VjaCBhcyBwb2ludHMsIGxpbmVzIG9yIHRyaWFuZ2xlcykuXG4gKi9cbnZhciBQcmltaXRpdmUgPSBleHBvcnRzLlByaW1pdGl2ZSA9IGNjLkNsYXNzKHtcbiAgbmFtZTogJ2NjLm1lc2guUHJpbWl0aXZlJyxcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0ZXggYnVuZGxlIHRoYXQgdGhlIHByaW1pdGl2ZSB1c2UuXG4gICAgICogQHByb3BlcnR5IHtbTnVtYmVyXX0gdmVydGV4QnVuZGxlSW5kaWNlc1xuICAgICAqL1xuICAgIHZlcnRleEJ1bmRsZUluZGljZXM6IHtcbiAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgdHlwZTogTnVtYmVyXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSByYW5nZSBvZiB0aGUgcHJpbWl0aXZlLlxuICAgICAqIFRoaXMgcmFuZ2Ugb2YgZGF0YSBpcyBlc3NlbnRpYWxseSBtYXBwZWQgdG8gYSBHUFUgaW5kaWNlcyBidWZmZXIuXG4gICAgICogQHByb3BlcnR5IHtCdWZmZXJSYW5nZX0gZGF0YVxuICAgICAqL1xuICAgIGRhdGE6IHtcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB0eXBlOiBCdWZmZXJSYW5nZVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhpcyBwcmltaXRpdmUncyBpbmRpY2VzLlxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBpbmRleFVuaXRcbiAgICAgKi9cbiAgICBpbmRleFVuaXQ6IF9nZngyLmRlZmF1bHQuSU5ERVhfRk1UX1VJTlQxNixcbiAgICAvKipcbiAgICAgKiBUaGUgcHJpbWl0aXZlJ3MgdG9wb2xvZ3kuXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHRvcG9sb2d5XG4gICAgICovXG4gICAgdG9wb2xvZ3k6IF9nZngyLmRlZmF1bHQuUFRfVFJJQU5HTEVTXG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW0xbGMyZ3RaR0YwWVM1cWN5SmRMQ0p1WVcxbGN5STZXeUpDZFdabVpYSlNZVzVuWlNJc0ltTmpJaXdpUTJ4aGMzTWlMQ0p1WVcxbElpd2ljSEp2Y0dWeWRHbGxjeUlzSW05bVpuTmxkQ0lzSW14bGJtZDBhQ0lzSWxabGNuUmxlRVp2Y20xaGRDSXNJblI1Y0dVaUxDSnVkVzBpTENKdWIzSnRZV3hwZW1VaUxDSldaWEowWlhoQ2RXNWtiR1VpTENKa1lYUmhJaXdpWkdWbVlYVnNkQ0lzSW1admNtMWhkSE1pTENKMlpYSjBhV05sYzBOdmRXNTBJaXdpVUhKcGJXbDBhWFpsSWl3aWRtVnlkR1Y0UW5WdVpHeGxTVzVrYVdObGN5SXNJazUxYldKbGNpSXNJbWx1WkdWNFZXNXBkQ0lzSW1kbWVDSXNJa2xPUkVWWVgwWk5WRjlWU1U1VU1UWWlMQ0owYjNCdmJHOW5lU0lzSWxCVVgxUlNTVUZPUjB4RlV5SmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVhsQ1FUczdPenM3TzBGQlJVRTdPenRCUVVkUExFbEJRVWxCTEc5RFFVRmpReXhIUVVGSFF5eExRVUZJTEVOQlFWTTdRVUZET1VKRExGRkJRVTBzWjBKQlJIZENPenRCUVVjNVFrTXNZMEZCV1R0QlFVTlNPenM3TzBGQlNVRkRMRmxCUVZFc1EwRk1RVHRCUVUxU096czdPMEZCU1VGRExGbEJRVkU3UVVGV1FUdEJRVWhyUWl4RFFVRlVMRU5CUVd4Q0xFTXNRMEU1UWxBN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVFclEwOHNTVUZCU1VNc2MwTkJRV1ZPTEVkQlFVZERMRXRCUVVnc1EwRkJVenRCUVVNdlFrTXNVVUZCVFN4elFrRkVlVUk3TzBGQlJ5OUNReXhqUVVGWk8wRkJRMUpFTEZWQlFVMHNSVUZFUlR0QlFVVlNTeXhWUVVGTkxFTkJRVU1zUTBGR1F6dEJRVWRTUXl4VFFVRkxMRU5CUVVNc1EwRklSVHRCUVVsU1F5eGxRVUZYTzBGQlNrZzdRVUZJYlVJc1EwRkJWQ3hEUVVGdVFqczdRVUZYVURzN096czdRVUZMVHl4SlFVRkpReXh6UTBGQlpWWXNSMEZCUjBNc1MwRkJTQ3hEUVVGVE8wRkJReTlDUXl4UlFVRk5MSE5DUVVSNVFqdEJRVVV2UWtNc1kwRkJXVHRCUVVOU096czdPenRCUVV0QlVTeFZRVUZOTzBGQlEwWkRMR1ZCUVZNc1NVRkVVRHRCUVVWR1RDeFpRVUZOVWp0QlFVWktMRXRCVGtVN1FVRlZVanM3T3p0QlFVbEJZeXhoUVVGVE8wRkJRMHhFTEdWQlFWTXNSVUZFU2p0QlFVVk1UQ3haUVVGTlJEdEJRVVpFTEV0QlpFUTdRVUZyUWxJN096dEJRVWRCVVN4dFFrRkJaVHRCUVhKQ1VEdEJRVVp0UWl4RFFVRlVMRU5CUVc1Q096dEJRVEpDVURzN096dEJRVWxQTEVsQlFVbERMR2REUVVGWlppeEhRVUZIUXl4TFFVRklMRU5CUVZNN1FVRkROVUpETEZGQlFVMHNiVUpCUkhOQ08wRkJSVFZDUXl4alFVRlpPMEZCUTFJN096czdRVUZKUVdFc2VVSkJRWEZDTzBGQlEycENTaXhsUVVGVExFVkJSRkU3UVVGRmFrSk1MRmxCUVUxVk8wRkJSbGNzUzBGTVlqdEJRVk5TT3pzN096dEJRVXRCVGl4VlFVRk5PMEZCUTBaRExHVkJRVk1zU1VGRVVEdEJRVVZHVEN4WlFVRk5VanRCUVVaS0xFdEJaRVU3UVVGclFsSTdPenM3UVVGSlFXMUNMR1ZCUVZkRExHTkJRVWxETEdkQ1FYUkNVRHRCUVhWQ1VqczdPenRCUVVsQlF5eGpRVUZWUml4alFVRkpSenRCUVROQ1RqdEJRVVpuUWl4RFFVRlVMRU5CUVdoQ0lpd2labWxzWlNJNkltMWxjMmd0WkdGMFlTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnUTI5d2VYSnBaMmgwSUNoaktTQXlNREUzTFRJd01UZ2dXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1WEc1Y2JpQm9kSFJ3T2k4dmQzZDNMbU52WTI5ekxtTnZiVnh1WEc0Z1VHVnliV2x6YzJsdmJpQnBjeUJvWlhKbFlua2daM0poYm5SbFpDd2dabkpsWlNCdlppQmphR0Z5WjJVc0lIUnZJR0Z1ZVNCd1pYSnpiMjRnYjJKMFlXbHVhVzVuSUdFZ1kyOXdlVnh1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaVzVuYVc1bElITnZkWEpqWlNCamIyUmxJQ2gwYUdVZ1hDSlRiMlowZDJGeVpWd2lLU3dnWVNCc2FXMXBkR1ZrTEZ4dUlDQjNiM0pzWkhkcFpHVXNJSEp2ZVdGc2RIa3RabkpsWlN3Z2JtOXVMV0Z6YzJsbmJtRmliR1VzSUhKbGRtOWpZV0pzWlNCaGJtUWdibTl1TFdWNFkyeDFjMmwyWlNCc2FXTmxibk5sWEc0Z2RHOGdkWE5sSUVOdlkyOXpJRU55WldGMGIzSWdjMjlzWld4NUlIUnZJR1JsZG1Wc2IzQWdaMkZ0WlhNZ2IyNGdlVzkxY2lCMFlYSm5aWFFnY0d4aGRHWnZjbTF6TGlCWmIzVWdjMmhoYkd4Y2JpQWdibTkwSUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdlpuUjNZWEpsSUdadmNpQmtaWFpsYkc5d2FXNW5JRzkwYUdWeUlITnZablIzWVhKbElHOXlJSFJ2YjJ4eklIUm9ZWFFuYzF4dUlDQjFjMlZrSUdadmNpQmtaWFpsYkc5d2FXNW5JR2RoYldWekxpQlpiM1VnWVhKbElHNXZkQ0JuY21GdWRHVmtJSFJ2SUhCMVlteHBjMmdzSUdScGMzUnlhV0oxZEdVc1hHNGdJSE4xWW14cFkyVnVjMlVzSUdGdVpDOXZjaUJ6Wld4c0lHTnZjR2xsY3lCdlppQkRiMk52Y3lCRGNtVmhkRzl5TGx4dVhHNGdWR2hsSUhOdlpuUjNZWEpsSUc5eUlIUnZiMnh6SUdsdUlIUm9hWE1nVEdsalpXNXpaU0JCWjNKbFpXMWxiblFnWVhKbElHeHBZMlZ1YzJWa0xDQnViM1FnYzI5c1pDNWNiaUJZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM0Z2NtVnpaWEoyWlhNZ1lXeHNJSEpwWjJoMGN5QnViM1FnWlhod2NtVnpjMng1SUdkeVlXNTBaV1FnZEc4Z2VXOTFMbHh1WEc0Z1ZFaEZJRk5QUmxSWFFWSkZJRWxUSUZCU1QxWkpSRVZFSUZ3aVFWTWdTVk5jSWl3Z1YwbFVTRTlWVkNCWFFWSlNRVTVVV1NCUFJpQkJUbGtnUzBsT1JDd2dSVmhRVWtWVFV5QlBVbHh1SUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBZZ1RVVlNRMGhCVGxSQlFrbE1TVlJaTEZ4dUlFWkpWRTVGVTFNZ1JrOVNJRUVnVUVGU1ZFbERWVXhCVWlCUVZWSlFUMU5GSUVGT1JDQk9UMDVKVGtaU1NVNUhSVTFGVGxRdUlFbE9JRTVQSUVWV1JVNVVJRk5JUVV4TUlGUklSVnh1SUVGVlZFaFBVbE1nVDFJZ1EwOVFXVkpKUjBoVUlFaFBURVJGVWxNZ1FrVWdURWxCUWt4RklFWlBVaUJCVGxrZ1EweEJTVTBzSUVSQlRVRkhSVk1nVDFJZ1QxUklSVkpjYmlCTVNVRkNTVXhKVkZrc0lGZElSVlJJUlZJZ1NVNGdRVTRnUVVOVVNVOU9JRTlHSUVOUFRsUlNRVU5VTENCVVQxSlVJRTlTSUU5VVNFVlNWMGxUUlN3Z1FWSkpVMGxPUnlCR1VrOU5MRnh1SUU5VlZDQlBSaUJQVWlCSlRpQkRUMDVPUlVOVVNVOU9JRmRKVkVnZ1ZFaEZJRk5QUmxSWFFWSkZJRTlTSUZSSVJTQlZVMFVnVDFJZ1QxUklSVklnUkVWQlRFbE9SMU1nU1U1Y2JpQlVTRVVnVTA5R1ZGZEJVa1V1WEc0Z0tpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaTljYmx4dWFXMXdiM0owSUdkbWVDQm1jbTl0SUNjdUxpOHVMaTl5Wlc1a1pYSmxjaTluWm5nbk8xeHVYRzR2S2lwY2JpQXFJRlJvWlNCamJHRnpjeUJDZFdabVpYSlNZVzVuWlNCa1pXNXZkR1Z6SUdFZ2NtRnVaMlVnYjJZZ2RHaGxJR0oxWm1abGNpNWNiaUFxTDF4dVpYaHdiM0owSUd4bGRDQkNkV1ptWlhKU1lXNW5aU0E5SUdOakxrTnNZWE56S0h0Y2JpQWdJQ0J1WVcxbE9pQW5ZMk11UW5WbVptVnlVbUZ1WjJVbkxGeHVYRzRnSUNBZ2NISnZjR1Z5ZEdsbGN6b2dlMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dWR2hsSUc5bVpuTmxkQ0J2WmlCMGFHVWdjbUZ1WjJVdVhHNGdJQ0FnSUNBZ0lDQXFJRUJ3Y205d1pYSjBlU0I3VG5WdFltVnlmU0J2Wm1aelpYUmNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUc5bVpuTmxkRG9nTUN4Y2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUZSb1pTQnNaVzVuZEdnZ2IyWWdkR2hsSUhKaGJtZGxMbHh1SUNBZ0lDQWdJQ0FnS2lCQWNISnZjR1Z5ZEhrZ2UwNTFiV0psY24wZ2JHVnVaM1JvWEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQnNaVzVuZEdnNklEQmNiaUFnSUNCOVhHNTlLVHRjYmx4dVpYaHdiM0owSUd4bGRDQldaWEowWlhoR2IzSnRZWFFnUFNCall5NURiR0Z6Y3loN1hHNGdJQ0FnYm1GdFpUb2dKMk5qTG0xbGMyZ3VWbVZ5ZEdWNFJtOXliV0YwSnl4Y2JseHVJQ0FnSUhCeWIzQmxjblJwWlhNNklIdGNiaUFnSUNBZ0lDQWdibUZ0WlRvZ0p5Y3NYRzRnSUNBZ0lDQWdJSFI1Y0dVNklDMHhMRnh1SUNBZ0lDQWdJQ0J1ZFcwNklDMHhMRnh1SUNBZ0lDQWdJQ0J1YjNKdFlXeHBlbVU2SUdaaGJITmxYRzRnSUNBZ2ZWeHVmU2s3WEc1Y2JpOHFLbHh1SUNvZ1FTQjJaWEowWlhnZ1luVnVaR3hsSUdSbGMyTnlhV0psY3lCaElITmxjbWxoYkhNZ2IyWWdkbVZ5ZEdWNElHRjBkSEpwWW5WMFpYTXVYRzRnS2lCVWFHVnpaU0IyWlhKMFpYZ2dZWFIwY21saWRYUmxjeUJ2WTJOMWNIa2dZU0J5WVc1blpTQnZaaUIwYUdVZ1luVm1abVZ5SUdGdVpGeHVJQ29nWVhKbElHbHVkR1Z5YkdWaGRtVmtMQ0J1YnlCd1lXUmthVzVuSUdKNWRHVnpMQ0JwYmlCMGFHVWdjbUZ1WjJVdVhHNGdLaTljYm1WNGNHOXlkQ0JzWlhRZ1ZtVnlkR1Y0UW5WdVpHeGxJRDBnWTJNdVEyeGhjM01vZTF4dUlDQWdJRzVoYldVNklDZGpZeTV0WlhOb0xsWmxjblJsZUVKMWJtUnNaU2NzWEc0Z0lDQWdjSEp2Y0dWeWRHbGxjem9nZTF4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nVkdobElHUmhkR0VnY21GdVoyVWdiMllnZEdocGN5QmlkVzVrYkdVdVhHNGdJQ0FnSUNBZ0lDQXFJRlJvYVhNZ2NtRnVaMlVnYjJZZ1pHRjBZU0JwY3lCbGMzTmxiblJwWVd4c2VTQnRZWEJ3WldRZ2RHOGdZU0JIVUZVZ2RtVnlkR1Y0SUdKMVptWmxjaTVjYmlBZ0lDQWdJQ0FnSUNvZ1FIQnliM0JsY25SNUlIdENkV1ptWlhKU1lXNW5aWDBnWkdGMFlWeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWkdGMFlUb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVm1ZWFZzZERvZ2JuVnNiQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U2SUVKMVptWmxjbEpoYm1kbFhHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQlVhR1VnWVhSMGNtbGlkWFJsSUdadmNtMWhkSE11WEc0Z0lDQWdJQ0FnSUNBcUlFQndjbTl3WlhKMGVTQjdWbVZ5ZEdWNFJtOXliV0YwZlNCbWIzSnRZWFJ6WEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQm1iM0p0WVhSek9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXWmhkV3gwT2lCYlhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhSNWNHVTZJRlpsY25SbGVFWnZjbTFoZEZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1ZHaGxJR0oxYm1Sc1pTZHpJSFpsY25ScFkyVnpJR052ZFc1MExseHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnZG1WeWRHbGpaWE5EYjNWdWREb2dNQ3hjYmlBZ0lDQjlYRzU5S1R0Y2JseHVMeW9xWEc0Z0tpQkJJSEJ5YVcxcGRHbDJaU0JwY3lCaElHZGxiMjFsZEhKNUlHTnZibk4wYVhSMWRHVmtJSGRwZEdnZ1lTQnNhWE4wSUc5bVhHNGdLaUJ6WVcxbElIUnZjRzlzYjJkNUlIQnlhVzFwZEdsMlpTQm5jbUZ3YUdsaktITjFZMmdnWVhNZ2NHOXBiblJ6TENCc2FXNWxjeUJ2Y2lCMGNtbGhibWRzWlhNcExseHVJQ292WEc1bGVIQnZjblFnYkdWMElGQnlhVzFwZEdsMlpTQTlJR05qTGtOc1lYTnpLSHRjYmlBZ0lDQnVZVzFsT2lBblkyTXViV1Z6YUM1UWNtbHRhWFJwZG1VbkxGeHVJQ0FnSUhCeWIzQmxjblJwWlhNNklIdGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlGUm9aU0IyWlhKMFpYZ2dZblZ1Wkd4bElIUm9ZWFFnZEdobElIQnlhVzFwZEdsMlpTQjFjMlV1WEc0Z0lDQWdJQ0FnSUNBcUlFQndjbTl3WlhKMGVTQjdXMDUxYldKbGNsMTlJSFpsY25SbGVFSjFibVJzWlVsdVpHbGpaWE5jYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lIWmxjblJsZUVKMWJtUnNaVWx1WkdsalpYTTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNklGdGRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVG9nVG5WdFltVnlYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJVYUdVZ1pHRjBZU0J5WVc1blpTQnZaaUIwYUdVZ2NISnBiV2wwYVhabExseHVJQ0FnSUNBZ0lDQWdLaUJVYUdseklISmhibWRsSUc5bUlHUmhkR0VnYVhNZ1pYTnpaVzUwYVdGc2JIa2diV0Z3Y0dWa0lIUnZJR0VnUjFCVklHbHVaR2xqWlhNZ1luVm1abVZ5TGx4dUlDQWdJQ0FnSUNBZ0tpQkFjSEp2Y0dWeWRIa2dlMEoxWm1abGNsSmhibWRsZlNCa1lYUmhYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCa1lYUmhPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1poZFd4ME9pQnVkV3hzTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkSGx3WlRvZ1FuVm1abVZ5VW1GdVoyVmNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRlJvWlNCMGVYQmxJRzltSUhSb2FYTWdjSEpwYldsMGFYWmxKM01nYVc1a2FXTmxjeTVjYmlBZ0lDQWdJQ0FnSUNvZ1FIQnliM0JsY25SNUlIdE9kVzFpWlhKOUlHbHVaR1Y0Vlc1cGRGeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnYVc1a1pYaFZibWwwT2lCblpuZ3VTVTVFUlZoZlJrMVVYMVZKVGxReE5peGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlGUm9aU0J3Y21sdGFYUnBkbVVuY3lCMGIzQnZiRzluZVM1Y2JpQWdJQ0FnSUNBZ0lDb2dRSEJ5YjNCbGNuUjVJSHRPZFcxaVpYSjlJSFJ2Y0c5c2IyZDVYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCMGIzQnZiRzluZVRvZ1oyWjRMbEJVWDFSU1NVRk9SMHhGVTF4dUlDQWdJSDFjYm4wcE8xeHVJbDE5Il19