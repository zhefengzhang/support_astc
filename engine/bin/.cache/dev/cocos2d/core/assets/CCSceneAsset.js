(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/assets/CCSceneAsset.js';
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
        var Scene = cc.Class({
            name: 'cc.SceneAsset',
            extends: cc.Asset,
            properties: {
                scene: null,
                asyncLoadAssets: undefined
            }
        });
        cc.SceneAsset = Scene;
        module.exports = Scene;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDU2NlbmVBc3NldC5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL2NvcmUvYXNzZXRzL0NDU2NlbmVBc3NldC5qcyJdLCJuYW1lcyI6WyJTY2VuZSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwiZXh0ZW5kcyIsIkFzc2V0IiwicHJvcGVydGllcyIsInNjZW5lIiwiYXN5bmNMb2FkQXNzZXRzIiwidW5kZWZpbmVkIiwiU2NlbmVBc3NldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQWlDQSxJQUFJQSxLQUFBQSxHQUFRQyxFQUFBQSxDQUFHQyxLQUFIRCxDQUFTO0FBQUEsWUFDakJFLElBQUFBLEVBQU0sZUFEVztBQUFBLFlBRWpCQyxPQUFBQSxFQUFTSCxFQUFBQSxDQUFHSSxLQUZLO0FBQUEsWUFJakJDLFVBQUFBLEVBQVk7QUFBQSxnQkFNUkMsS0FBQUEsRUFBTyxJQU5DO0FBQUEsZ0JBY1JDLGVBQUFBLEVBQWlCQyxTQWRUO0FBQUEsYUFKSztBQUFBLFNBQVRSLENBQVo7UUE2QkFBLEVBQUFBLENBQUdTLFVBQUhULEdBQWdCRCxLQUFoQkM7UUFDQVUsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJYLEtBQWpCVyIsImZpbGUiOiJDQ1NjZW5lQXNzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogISNlbiBDbGFzcyBmb3Igc2NlbmUgaGFuZGxpbmcuXG4gKiAhI3poIOWcuuaZr+i1hOa6kOexu+OAglxuICogQGNsYXNzIFNjZW5lQXNzZXRcbiAqIEBleHRlbmRzIEFzc2V0XG4gKlxuICovXG52YXIgU2NlbmUgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2NjLlNjZW5lQXNzZXQnLFxuICAgIGV4dGVuZHM6IGNjLkFzc2V0LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJvcGVydHkge1NjZW5lfSBzY2VuZVxuICAgICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgICAqL1xuICAgICAgICBzY2VuZTogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBJbmRpY2F0ZXMgdGhlIHJhdyBhc3NldHMgb2YgdGhpcyBzY2VuZSBjYW4gYmUgbG9hZCBhZnRlciBzY2VuZSBsYXVuY2hlZC5cbiAgICAgICAgICogISN6aCDmjIfnpLror6XlnLrmma/kvp3otZbnmoTotYTmupDlj6/lkKblnKjlnLrmma/liIfmjaLlkI7lho3lu7bov5/liqDovb3jgIJcbiAgICAgICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhc3luY0xvYWRBc3NldHNcbiAgICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGFzeW5jTG9hZEFzc2V0czogdW5kZWZpbmVkLFxuXG4gICAgICAgIC8vLy8gYmFja3VwIHByZWZhYiBhc3NldHMgaW4gZWRpdG9yXG4gICAgICAgIC8vLy8ge3N0cmluZ30gYXNzZXRVdWlkOiB7Y2MuTm9kZX0gcm9vdEluUHJlZmFiXG4gICAgICAgIC8vX3ByZWZhYkRhdGFzOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIGVkaXRvck9ubHk6IHRydWVcbiAgICAgICAgLy99XG4gICAgfSxcbn0pO1xuXG5jYy5TY2VuZUFzc2V0ID0gU2NlbmU7XG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogISNlbiBDbGFzcyBmb3Igc2NlbmUgaGFuZGxpbmcuXG4gKiAhI3poIOWcuuaZr+i1hOa6kOexu+OAglxuICogQGNsYXNzIFNjZW5lQXNzZXRcbiAqIEBleHRlbmRzIEFzc2V0XG4gKlxuICovXG52YXIgU2NlbmUgPSBjYy5DbGFzcyh7XG4gIG5hbWU6ICdjYy5TY2VuZUFzc2V0JyxcbiAgZXh0ZW5kczogY2MuQXNzZXQsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogQHByb3BlcnR5IHtTY2VuZX0gc2NlbmVcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgc2NlbmU6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiAhI2VuIEluZGljYXRlcyB0aGUgcmF3IGFzc2V0cyBvZiB0aGlzIHNjZW5lIGNhbiBiZSBsb2FkIGFmdGVyIHNjZW5lIGxhdW5jaGVkLlxuICAgICAqICEjemgg5oyH56S66K+l5Zy65pmv5L6d6LWW55qE6LWE5rqQ5Y+v5ZCm5Zyo5Zy65pmv5YiH5o2i5ZCO5YaN5bu26L+f5Yqg6L2944CCXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhc3luY0xvYWRBc3NldHNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGFzeW5jTG9hZEFzc2V0czogdW5kZWZpbmVkXG5cbiAgICAvLy8vIGJhY2t1cCBwcmVmYWIgYXNzZXRzIGluIGVkaXRvclxuICAgIC8vLy8ge3N0cmluZ30gYXNzZXRVdWlkOiB7Y2MuTm9kZX0gcm9vdEluUHJlZmFiXG4gICAgLy9fcHJlZmFiRGF0YXM6IHtcbiAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgIC8vICAgIGVkaXRvck9ubHk6IHRydWVcbiAgICAvL31cbiAgfVxufSk7XG5cbmNjLlNjZW5lQXNzZXQgPSBTY2VuZTtcbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EVTJObGJtVkJjM05sZEM1cWN5SmRMQ0p1WVcxbGN5STZXeUpUWTJWdVpTSXNJbU5qSWl3aVEyeGhjM01pTENKdVlXMWxJaXdpWlhoMFpXNWtjeUlzSWtGemMyVjBJaXdpY0hKdmNHVnlkR2xsY3lJc0luTmpaVzVsSWl3aVlYTjVibU5NYjJGa1FYTnpaWFJ6SWl3aWRXNWtaV1pwYm1Wa0lpd2lVMk5sYm1WQmMzTmxkQ0lzSW0xdlpIVnNaU0lzSW1WNGNHOXlkSE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk1FSkJPenM3T3pzN08wRkJUMEVzU1VGQlNVRXNVVUZCVVVNc1IwRkJSME1zUzBGQlNDeERRVUZUTzBGQlEycENReXhSUVVGTkxHVkJSRmM3UVVGRmFrSkRMRmRCUVZOSUxFZEJRVWRKTEV0QlJrczdPMEZCU1dwQ1F5eGpRVUZaT3p0QlFVVlNPenM3TzBGQlNVRkRMRmRCUVU4c1NVRk9RenM3UVVGUlVqczdPenM3TzBGQlRVRkRMSEZDUVVGcFFrTTdPMEZCUldwQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFYSkNVVHRCUVVwTExFTkJRVlFzUTBGQldqczdRVUUyUWtGU0xFZEJRVWRUTEZWQlFVZ3NSMEZCWjBKV0xFdEJRV2hDTzBGQlEwRlhMRTlCUVU5RExFOUJRVkFzUjBGQmFVSmFMRXRCUVdwQ0lpd2labWxzWlNJNklrTkRVMk5sYm1WQmMzTmxkQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFekxUSXdNVFlnUTJoMWEyOXVaeUJVWldOb2JtOXNiMmRwWlhNZ1NXNWpMbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4dVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4dVhHNGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRWdZMjl3ZVZ4dUlHOW1JSFJvYVhNZ2MyOW1kSGRoY21VZ1lXNWtJR0Z6YzI5amFXRjBaV1FnWlc1bmFXNWxJSE52ZFhKalpTQmpiMlJsSUNoMGFHVWdYQ0pUYjJaMGQyRnlaVndpS1N3Z1lTQnNhVzFwZEdWa0xGeHVJQ0IzYjNKc1pIZHBaR1VzSUhKdmVXRnNkSGt0Wm5KbFpTd2dibTl1TFdGemMybG5ibUZpYkdVc0lISmxkbTlqWVdKc1pTQmhibVFnYm05dUxXVjRZMngxYzJsMlpTQnNhV05sYm5ObFhHNGdkRzhnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5c1pXeDVJSFJ2SUdSbGRtVnNiM0FnWjJGdFpYTWdiMjRnZVc5MWNpQjBZWEpuWlhRZ2NHeGhkR1p2Y20xekxpQlpiM1VnYzJoaGJHeGNiaUFnYm05MElIVnpaU0JEYjJOdmN5QkRjbVZoZEc5eUlITnZablIzWVhKbElHWnZjaUJrWlhabGJHOXdhVzVuSUc5MGFHVnlJSE52Wm5SM1lYSmxJRzl5SUhSdmIyeHpJSFJvWVhRbmMxeHVJQ0IxYzJWa0lHWnZjaUJrWlhabGJHOXdhVzVuSUdkaGJXVnpMaUJaYjNVZ1lYSmxJRzV2ZENCbmNtRnVkR1ZrSUhSdklIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNYRzRnSUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNJR052Y0dsbGN5QnZaaUJEYjJOdmN5QkRjbVZoZEc5eUxseHVYRzRnVkdobElITnZablIzWVhKbElHOXlJSFJ2YjJ4eklHbHVJSFJvYVhNZ1RHbGpaVzV6WlNCQlozSmxaVzFsYm5RZ1lYSmxJR3hwWTJWdWMyVmtMQ0J1YjNRZ2MyOXNaQzVjYmlCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNGdjbVZ6WlhKMlpYTWdZV3hzSUhKcFoyaDBjeUJ1YjNRZ1pYaHdjbVZ6YzJ4NUlHZHlZVzUwWldRZ2RHOGdlVzkxTGx4dVhHNGdWRWhGSUZOUFJsUlhRVkpGSUVsVElGQlNUMVpKUkVWRUlGd2lRVk1nU1ZOY0lpd2dWMGxVU0U5VlZDQlhRVkpTUVU1VVdTQlBSaUJCVGxrZ1MwbE9SQ3dnUlZoUVVrVlRVeUJQVWx4dUlFbE5VRXhKUlVRc0lFbE9RMHhWUkVsT1J5QkNWVlFnVGs5VUlFeEpUVWxVUlVRZ1ZFOGdWRWhGSUZkQlVsSkJUbFJKUlZNZ1QwWWdUVVZTUTBoQlRsUkJRa2xNU1ZSWkxGeHVJRVpKVkU1RlUxTWdSazlTSUVFZ1VFRlNWRWxEVlV4QlVpQlFWVkpRVDFORklFRk9SQ0JPVDA1SlRrWlNTVTVIUlUxRlRsUXVJRWxPSUU1UElFVldSVTVVSUZOSVFVeE1JRlJJUlZ4dUlFRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc0lFUkJUVUZIUlZNZ1QxSWdUMVJJUlZKY2JpQk1TVUZDU1V4SlZGa3NJRmRJUlZSSVJWSWdTVTRnUVU0Z1FVTlVTVTlPSUU5R0lFTlBUbFJTUVVOVUxDQlVUMUpVSUU5U0lFOVVTRVZTVjBsVFJTd2dRVkpKVTBsT1J5QkdVazlOTEZ4dUlFOVZWQ0JQUmlCUFVpQkpUaUJEVDA1T1JVTlVTVTlPSUZkSlZFZ2dWRWhGSUZOUFJsUlhRVkpGSUU5U0lGUklSU0JWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNWNiaUJVU0VVZ1UwOUdWRmRCVWtVdVhHNGdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2k5Y2JseHVMeW9xWEc0Z0tpQWhJMlZ1SUVOc1lYTnpJR1p2Y2lCelkyVnVaU0JvWVc1a2JHbHVaeTVjYmlBcUlDRWplbWdnNVp5NjVwbXY2TFdFNXJxUTU3Rzc0NENDWEc0Z0tpQkFZMnhoYzNNZ1UyTmxibVZCYzNObGRGeHVJQ29nUUdWNGRHVnVaSE1nUVhOelpYUmNiaUFxWEc0Z0tpOWNiblpoY2lCVFkyVnVaU0E5SUdOakxrTnNZWE56S0h0Y2JpQWdJQ0J1WVcxbE9pQW5ZMk11VTJObGJtVkJjM05sZENjc1hHNGdJQ0FnWlhoMFpXNWtjem9nWTJNdVFYTnpaWFFzWEc1Y2JpQWdJQ0J3Y205d1pYSjBhV1Z6T2lCN1hHNWNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlFQndjbTl3WlhKMGVTQjdVMk5sYm1WOUlITmpaVzVsWEc0Z0lDQWdJQ0FnSUNBcUlFQmtaV1poZFd4MElHNTFiR3hjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lITmpaVzVsT2lCdWRXeHNMRnh1WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUFoSTJWdUlFbHVaR2xqWVhSbGN5QjBhR1VnY21GM0lHRnpjMlYwY3lCdlppQjBhR2x6SUhOalpXNWxJR05oYmlCaVpTQnNiMkZrSUdGbWRHVnlJSE5qWlc1bElHeGhkVzVqYUdWa0xseHVJQ0FnSUNBZ0lDQWdLaUFoSTNwb0lPYU1oK2VrdXVpdnBlV2N1dWFacitTK25laTFsdWVhaE9pMWhPYTZrT1dQcitXUXB1V2NxT1djdXVhWnIrV0loK2FOb3VXUWp1V0dqZVc3dHVpL24rV0tvT2k5dmVPQWdseHVJQ0FnSUNBZ0lDQWdLaUJBY0hKdmNHVnlkSGtnZTBKdmIyeGxZVzU5SUdGemVXNWpURzloWkVGemMyVjBjMXh1SUNBZ0lDQWdJQ0FnS2lCQVpHVm1ZWFZzZENCbVlXeHpaVnh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1lYTjVibU5NYjJGa1FYTnpaWFJ6T2lCMWJtUmxabWx1WldRc1hHNWNiaUFnSUNBZ0lDQWdMeTh2THlCaVlXTnJkWEFnY0hKbFptRmlJR0Z6YzJWMGN5QnBiaUJsWkdsMGIzSmNiaUFnSUNBZ0lDQWdMeTh2THlCN2MzUnlhVzVuZlNCaGMzTmxkRlYxYVdRNklIdGpZeTVPYjJSbGZTQnliMjkwU1c1UWNtVm1ZV0pjYmlBZ0lDQWdJQ0FnTHk5ZmNISmxabUZpUkdGMFlYTTZJSHRjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdaR1ZtWVhWc2REb2diblZzYkN4Y2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnWldScGRHOXlUMjVzZVRvZ2RISjFaVnh1SUNBZ0lDQWdJQ0F2TDMxY2JpQWdJQ0I5TEZ4dWZTazdYRzVjYm1OakxsTmpaVzVsUVhOelpYUWdQU0JUWTJWdVpUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdVMk5sYm1VN1hHNGlYWDA9Il19