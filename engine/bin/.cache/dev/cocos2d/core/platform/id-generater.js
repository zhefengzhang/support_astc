(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/platform/id-generater.js';
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
        var NonUuidMark = '.';
        function IdGenerater(category) {
            this.id = 0 | Math.random() * 998;
            this.prefix = category ? category + NonUuidMark : '';
        }
        IdGenerater.prototype.getNewId = function () {
            return this.prefix + ++this.id;
        };
        IdGenerater.global = new IdGenerater('global');
        module.exports = IdGenerater;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkLWdlbmVyYXRlci5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL2NvcmUvcGxhdGZvcm0vaWQtZ2VuZXJhdGVyLmpzIl0sIm5hbWVzIjpbIk5vblV1aWRNYXJrIiwiSWRHZW5lcmF0ZXIiLCJjYXRlZ29yeSIsImlkIiwiTWF0aCIsInJhbmRvbSIsInByZWZpeCIsInByb3RvdHlwZSIsImdldE5ld0lkIiwiZ2xvYmFsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBNEJBLElBQUlBLFdBQUFBLEdBQWMsR0FBbEI7UUFLQSxTQUFTQyxXQUFULENBQXNCQyxRQUF0QixFQUFnQztBQUFBLFlBRTVCLEtBQUtDLEVBQUwsR0FBVSxJQUFLQyxJQUFBQSxDQUFLQyxNQUFMRCxLQUFnQixHQUEvQixDQUY0QjtBQUFBLFlBSTVCLEtBQUtFLE1BQUwsR0FBY0osUUFBQUEsR0FBWUEsUUFBQUEsR0FBV0YsV0FBdkJFLEdBQXNDLEVBQXBELENBSjRCO0FBQUE7UUFXaENELFdBQUFBLENBQVlNLFNBQVpOLENBQXNCTyxRQUF0QlAsR0FBaUMsWUFBWTtBQUFBLFlBQ3pDLE9BQU8sS0FBS0ssTUFBTCxHQUFlLEVBQUUsS0FBS0gsRUFBN0IsQ0FEeUM7QUFBQSxTQUE3Q0Y7UUFRQUEsV0FBQUEsQ0FBWVEsTUFBWlIsR0FBcUIsSUFBSUEsV0FBSixDQUFnQixRQUFoQixDQUFyQkE7UUFFQVMsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJULFdBQWpCUyIsImZpbGUiOiJpZC1nZW5lcmF0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gSUQgZ2VuZXJhdGVyIGZvciBydW50aW1lXG5cbnZhciBOb25VdWlkTWFyayA9ICcuJztcblxuLypcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY2F0ZWdvcnldIC0gWW91IGNhbiBzcGVjaWZ5IGEgdW5pcXVlIGNhdGVnb3J5IHRvIGF2b2lkIGlkIGNvbGxpc2lvbiB3aXRoIG90aGVyIGluc3RhbmNlIG9mIElkR2VuZXJhdGVyXG4gKi9cbmZ1bmN0aW9uIElkR2VuZXJhdGVyIChjYXRlZ29yeSkge1xuICAgIC8vIGluaXQgd2l0aCBhIHJhbmRvbSBpZCB0byBlbXBoYXNpemUgdGhhdCB0aGUgcmV0dXJucyBpZCBzaG91bGQgbm90IGJlIHN0b3JlZCBpbiBwZXJzaXN0ZW5jZSBkYXRhXG4gICAgdGhpcy5pZCA9IDAgfCAoTWF0aC5yYW5kb20oKSAqIDk5OCk7XG4gICAgXG4gICAgdGhpcy5wcmVmaXggPSBjYXRlZ29yeSA/IChjYXRlZ29yeSArIE5vblV1aWRNYXJrKSA6ICcnO1xufVxuXG4vKlxuICogQG1ldGhvZCBnZXROZXdJZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5JZEdlbmVyYXRlci5wcm90b3R5cGUuZ2V0TmV3SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4ICsgKCsrdGhpcy5pZCk7XG59O1xuXG4vKlxuICogVGhlIGdsb2JhbCBpZCBnZW5lcmF0ZXIgbWlnaHQgaGF2ZSBhIGNvbmZsaWN0IHByb2JsZW0gb25jZSBldmVyeSAzNjUgZGF5cyxcbiAqIGlmIHRoZSBnYW1lIHJ1bnMgYXQgNjAgRlBTIGFuZCBlYWNoIGZyYW1lIDQ3NjAyNzMgY291bnRzIG9mIG5ldyBpZCBhcmUgcmVxdWVzdGVkLlxuICovXG5JZEdlbmVyYXRlci5nbG9iYWwgPSBuZXcgSWRHZW5lcmF0ZXIoJ2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElkR2VuZXJhdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gSUQgZ2VuZXJhdGVyIGZvciBydW50aW1lXG5cbnZhciBOb25VdWlkTWFyayA9ICcuJztcblxuLypcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY2F0ZWdvcnldIC0gWW91IGNhbiBzcGVjaWZ5IGEgdW5pcXVlIGNhdGVnb3J5IHRvIGF2b2lkIGlkIGNvbGxpc2lvbiB3aXRoIG90aGVyIGluc3RhbmNlIG9mIElkR2VuZXJhdGVyXG4gKi9cbmZ1bmN0aW9uIElkR2VuZXJhdGVyKGNhdGVnb3J5KSB7XG4gIC8vIGluaXQgd2l0aCBhIHJhbmRvbSBpZCB0byBlbXBoYXNpemUgdGhhdCB0aGUgcmV0dXJucyBpZCBzaG91bGQgbm90IGJlIHN0b3JlZCBpbiBwZXJzaXN0ZW5jZSBkYXRhXG4gIHRoaXMuaWQgPSAwIHwgTWF0aC5yYW5kb20oKSAqIDk5ODtcblxuICB0aGlzLnByZWZpeCA9IGNhdGVnb3J5ID8gY2F0ZWdvcnkgKyBOb25VdWlkTWFyayA6ICcnO1xufVxuXG4vKlxuICogQG1ldGhvZCBnZXROZXdJZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5JZEdlbmVyYXRlci5wcm90b3R5cGUuZ2V0TmV3SWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnByZWZpeCArICsrdGhpcy5pZDtcbn07XG5cbi8qXG4gKiBUaGUgZ2xvYmFsIGlkIGdlbmVyYXRlciBtaWdodCBoYXZlIGEgY29uZmxpY3QgcHJvYmxlbSBvbmNlIGV2ZXJ5IDM2NSBkYXlzLFxuICogaWYgdGhlIGdhbWUgcnVucyBhdCA2MCBGUFMgYW5kIGVhY2ggZnJhbWUgNDc2MDI3MyBjb3VudHMgb2YgbmV3IGlkIGFyZSByZXF1ZXN0ZWQuXG4gKi9cbklkR2VuZXJhdGVyLmdsb2JhbCA9IG5ldyBJZEdlbmVyYXRlcignZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gSWRHZW5lcmF0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWxrTFdkbGJtVnlZWFJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpPYjI1VmRXbGtUV0Z5YXlJc0lrbGtSMlZ1WlhKaGRHVnlJaXdpWTJGMFpXZHZjbmtpTENKcFpDSXNJazFoZEdnaUxDSnlZVzVrYjIwaUxDSndjbVZtYVhnaUxDSndjbTkwYjNSNWNHVWlMQ0puWlhST1pYZEpaQ0lzSW1kc2IySmhiQ0lzSW0xdlpIVnNaU0lzSW1WNGNHOXlkSE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk1FSkJPenRCUVVWQkxFbEJRVWxCTEdOQlFXTXNSMEZCYkVJN08wRkJSVUU3T3p0QlFVZEJMRk5CUVZORExGZEJRVlFzUTBGQmMwSkRMRkZCUVhSQ0xFVkJRV2RETzBGQlF6VkNPMEZCUTBFc1QwRkJTME1zUlVGQlRDeEhRVUZWTEVsQlFVdERMRXRCUVV0RExFMUJRVXdzUzBGQlowSXNSMEZCTDBJN08wRkJSVUVzVDBGQlMwTXNUVUZCVEN4SFFVRmpTaXhYUVVGWlFTeFhRVUZYUml4WFFVRjJRaXhIUVVGelF5eEZRVUZ3UkR0QlFVTklPenRCUVVWRU96czdPMEZCU1VGRExGbEJRVmxOTEZOQlFWb3NRMEZCYzBKRExGRkJRWFJDTEVkQlFXbERMRmxCUVZrN1FVRkRla01zVTBGQlR5eExRVUZMUml4TlFVRk1MRWRCUVdVc1JVRkJSU3hMUVVGTFNDeEZRVUUzUWp0QlFVTklMRU5CUmtRN08wRkJTVUU3T3pzN1FVRkpRVVlzV1VGQldWRXNUVUZCV2l4SFFVRnhRaXhKUVVGSlVpeFhRVUZLTEVOQlFXZENMRkZCUVdoQ0xFTkJRWEpDT3p0QlFVVkJVeXhQUVVGUFF5eFBRVUZRTEVkQlFXbENWaXhYUVVGcVFpSXNJbVpwYkdVaU9pSnBaQzFuWlc1bGNtRjBaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE15MHlNREUySUVOb2RXdHZibWNnVkdWamFHNXZiRzluYVdWeklFbHVZeTVjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRjdE1qQXhPQ0JZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM1Y2JseHVJR2gwZEhCek9pOHZkM2QzTG1OdlkyOXpMbU52YlM5Y2JseHVJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhJR052Y0hsY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNiaUIzYjNKc1pIZHBaR1VzSUhKdmVXRnNkSGt0Wm5KbFpTd2dibTl1TFdGemMybG5ibUZpYkdVc0lISmxkbTlqWVdKc1pTQmhibVFnYm05dUxXVjRZMngxYzJsMlpTQnNhV05sYm5ObFhHNGdkRzhnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5c1pXeDVJSFJ2SUdSbGRtVnNiM0FnWjJGdFpYTWdiMjRnZVc5MWNpQjBZWEpuWlhRZ2NHeGhkR1p2Y20xekxpQlpiM1VnYzJoaGJHeGNiaUJ1YjNRZ2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOW1kSGRoY21VZ1ptOXlJR1JsZG1Wc2IzQnBibWNnYjNSb1pYSWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdkR2hoZENkelhHNGdkWE5sWkNCbWIzSWdaR1YyWld4dmNHbHVaeUJuWVcxbGN5NGdXVzkxSUdGeVpTQnViM1FnWjNKaGJuUmxaQ0IwYnlCd2RXSnNhWE5vTENCa2FYTjBjbWxpZFhSbExGeHVJSE4xWW14cFkyVnVjMlVzSUdGdVpDOXZjaUJ6Wld4c0lHTnZjR2xsY3lCdlppQkRiMk52Y3lCRGNtVmhkRzl5TGx4dVhHNGdWR2hsSUhOdlpuUjNZWEpsSUc5eUlIUnZiMnh6SUdsdUlIUm9hWE1nVEdsalpXNXpaU0JCWjNKbFpXMWxiblFnWVhKbElHeHBZMlZ1YzJWa0xDQnViM1FnYzI5c1pDNWNiaUJZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM0Z2NtVnpaWEoyWlhNZ1lXeHNJSEpwWjJoMGN5QnViM1FnWlhod2NtVnpjMng1SUdkeVlXNTBaV1FnZEc4Z2VXOTFMbHh1WEc0Z1ZFaEZJRk5QUmxSWFFWSkZJRWxUSUZCU1QxWkpSRVZFSUZ3aVFWTWdTVk5jSWl3Z1YwbFVTRTlWVkNCWFFWSlNRVTVVV1NCUFJpQkJUbGtnUzBsT1JDd2dSVmhRVWtWVFV5QlBVbHh1SUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBZZ1RVVlNRMGhCVGxSQlFrbE1TVlJaTEZ4dUlFWkpWRTVGVTFNZ1JrOVNJRUVnVUVGU1ZFbERWVXhCVWlCUVZWSlFUMU5GSUVGT1JDQk9UMDVKVGtaU1NVNUhSVTFGVGxRdUlFbE9JRTVQSUVWV1JVNVVJRk5JUVV4TUlGUklSVnh1SUVGVlZFaFBVbE1nVDFJZ1EwOVFXVkpKUjBoVUlFaFBURVJGVWxNZ1FrVWdURWxCUWt4RklFWlBVaUJCVGxrZ1EweEJTVTBzSUVSQlRVRkhSVk1nVDFJZ1QxUklSVkpjYmlCTVNVRkNTVXhKVkZrc0lGZElSVlJJUlZJZ1NVNGdRVTRnUVVOVVNVOU9JRTlHSUVOUFRsUlNRVU5VTENCVVQxSlVJRTlTSUU5VVNFVlNWMGxUUlN3Z1FWSkpVMGxPUnlCR1VrOU5MRnh1SUU5VlZDQlBSaUJQVWlCSlRpQkRUMDVPUlVOVVNVOU9JRmRKVkVnZ1ZFaEZJRk5QUmxSWFFWSkZJRTlTSUZSSVJTQlZVMFVnVDFJZ1QxUklSVklnUkVWQlRFbE9SMU1nU1U1Y2JpQlVTRVVnVTA5R1ZGZEJVa1V1WEc0Z0tpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaTljYmx4dUx5OGdTVVFnWjJWdVpYSmhkR1Z5SUdadmNpQnlkVzUwYVcxbFhHNWNiblpoY2lCT2IyNVZkV2xrVFdGeWF5QTlJQ2N1Snp0Y2JseHVMeXBjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCYlkyRjBaV2R2Y25sZElDMGdXVzkxSUdOaGJpQnpjR1ZqYVdaNUlHRWdkVzVwY1hWbElHTmhkR1ZuYjNKNUlIUnZJR0YyYjJsa0lHbGtJR052Ykd4cGMybHZiaUIzYVhSb0lHOTBhR1Z5SUdsdWMzUmhibU5sSUc5bUlFbGtSMlZ1WlhKaGRHVnlYRzRnS2k5Y2JtWjFibU4wYVc5dUlFbGtSMlZ1WlhKaGRHVnlJQ2hqWVhSbFoyOXllU2tnZTF4dUlDQWdJQzh2SUdsdWFYUWdkMmwwYUNCaElISmhibVJ2YlNCcFpDQjBieUJsYlhCb1lYTnBlbVVnZEdoaGRDQjBhR1VnY21WMGRYSnVjeUJwWkNCemFHOTFiR1FnYm05MElHSmxJSE4wYjNKbFpDQnBiaUJ3WlhKemFYTjBaVzVqWlNCa1lYUmhYRzRnSUNBZ2RHaHBjeTVwWkNBOUlEQWdmQ0FvVFdGMGFDNXlZVzVrYjIwb0tTQXFJRGs1T0NrN1hHNGdJQ0FnWEc0Z0lDQWdkR2hwY3k1d2NtVm1hWGdnUFNCallYUmxaMjl5ZVNBL0lDaGpZWFJsWjI5eWVTQXJJRTV2YmxWMWFXUk5ZWEpyS1NBNklDY25PMXh1ZlZ4dVhHNHZLbHh1SUNvZ1FHMWxkR2h2WkNCblpYUk9aWGRKWkZ4dUlDb2dRSEpsZEhWeWJpQjdjM1J5YVc1bmZWeHVJQ292WEc1SlpFZGxibVZ5WVhSbGNpNXdjbTkwYjNSNWNHVXVaMlYwVG1WM1NXUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNISmxabWw0SUNzZ0tDc3JkR2hwY3k1cFpDazdYRzU5TzF4dVhHNHZLbHh1SUNvZ1ZHaGxJR2RzYjJKaGJDQnBaQ0JuWlc1bGNtRjBaWElnYldsbmFIUWdhR0YyWlNCaElHTnZibVpzYVdOMElIQnliMkpzWlcwZ2IyNWpaU0JsZG1WeWVTQXpOalVnWkdGNWN5eGNiaUFxSUdsbUlIUm9aU0JuWVcxbElISjFibk1nWVhRZ05qQWdSbEJUSUdGdVpDQmxZV05vSUdaeVlXMWxJRFEzTmpBeU56TWdZMjkxYm5SeklHOW1JRzVsZHlCcFpDQmhjbVVnY21WeGRXVnpkR1ZrTGx4dUlDb3ZYRzVKWkVkbGJtVnlZWFJsY2k1bmJHOWlZV3dnUFNCdVpYY2dTV1JIWlc1bGNtRjBaWElvSjJkc2IySmhiQ2NwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFbGtSMlZ1WlhKaGRHVnlPMXh1SWwxOSJdfQ==