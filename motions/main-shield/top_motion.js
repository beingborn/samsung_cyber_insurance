(function (cjs, an) {
    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [
        {
            name: 'top_motion_atlas_1',
            frames: [
                [0, 932, 183, 208],
                [362, 880, 342, 342],
                [362, 472, 360, 406],
                [362, 0, 360, 470],
                [0, 0, 360, 930],
            ],
        },
    ];

    (lib.AnMovieClip = function () {
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        };
        this.play = function () {
            cjs.MovieClip.prototype.play.call(this);
        };
        this.gotoAndStop = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        };
        this.stop = function () {
            cjs.MovieClip.prototype.stop.call(this);
        };
    }).prototype = p = new cjs.MovieClip();
    // symbols:

    (lib.방패 = function () {
        this.initialize(ss['top_motion_atlas_1']);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();

    (lib.Ellipse59 = function () {
        this.initialize(ss['top_motion_atlas_1']);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();

    (lib.Ellipse60 = function () {
        this.initialize(ss['top_motion_atlas_1']);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();

    (lib.Ellipse61 = function () {
        this.initialize(ss['top_motion_atlas_1']);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();

    (lib.Frame120 = function () {
        this.initialize(ss['top_motion_atlas_1']);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();

    (lib.MainC안3 = function () {
        this.initialize(img.MainC안3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 360, 3988); // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }

    (lib.Symbol7 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Ellipse60();
        this.instance.setTransform(-180, -203);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-180, -203, 360, 406), null);

    (lib.Symbol6 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Ellipse59();
        this.instance.setTransform(-171, -171);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-171, -171, 342, 342), null);

    (lib.Symbol5 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Ellipse61();
        this.instance.setTransform(-180, -235);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-180, -235, 360, 470), null);

    (lib.Symbol4 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Frame120();
        this.instance.setTransform(-180, -465);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-180, -465, 360, 930), null);

    (lib.Symbol12 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Symbol_6
        this.instance = new lib.Symbol6();
        var instanceFilter_1 = new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0);
        this.instance.filters = [instanceFilter_1];
        this.instance.cache(-173, -173, 346, 346);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({ scaleX: 1.131, scaleY: 1.131 }, 33, cjs.Ease.cubicIn).to({ scaleX: 1, scaleY: 1 }, 30, cjs.Ease.cubicOut).wait(149));
        this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(16).to(new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), 33, cjs.Ease.cubicIn).to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 30, cjs.Ease.cubicOut).wait(149));

        // Symbol_7
        this.instance_1 = new lib.Symbol7();
        var instance_1Filter_2 = new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0);
        this.instance_1.filters = [instance_1Filter_2];
        this.instance_1.cache(-182, -205, 364, 410);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({ scaleX: 1.1142, scaleY: 1.1142 }, 33, cjs.Ease.cubicIn).to({ scaleX: 1, scaleY: 1 }, 34, cjs.Ease.cubicOut).wait(133));
        this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(28).to(new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), 33, cjs.Ease.cubicIn).to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 34, cjs.Ease.cubicOut).wait(133));

        // Symbol_5
        this.instance_2 = new lib.Symbol5();
        var instance_2Filter_3 = new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0);
        this.instance_2.filters = [instance_2Filter_3];
        this.instance_2.cache(-182, -237, 364, 474);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({ scaleX: 1.1021, scaleY: 1.1021 }, 37, cjs.Ease.cubicIn).to({ scaleX: 1, scaleY: 1 }, 39, cjs.Ease.cubicOut).wait(113));
        this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(39).to(new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), 37, cjs.Ease.cubicIn).to(new cjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 39, cjs.Ease.cubicOut).wait(113));

        this.filterCacheList = [];
        this.filterCacheList.push({ instance: this.instance, startFrame: 16, endFrame: 16, x: -173, y: -173, w: 346, h: 346 });
        this.filterCacheList.push({ instance: this.instance, startFrame: 17, endFrame: 49, x: -173, y: -173, w: 346, h: 346 });
        this.filterCacheList.push({ instance: this.instance, startFrame: 50, endFrame: 79, x: -173, y: -173, w: 346, h: 346 });
        this.filterCacheList.push({ instance: this.instance_1, startFrame: 28, endFrame: 28, x: -182, y: -205, w: 364, h: 410 });
        this.filterCacheList.push({ instance: this.instance_1, startFrame: 29, endFrame: 61, x: -182, y: -205, w: 364, h: 410 });
        this.filterCacheList.push({ instance: this.instance_1, startFrame: 62, endFrame: 95, x: -182, y: -205, w: 364, h: 410 });
        this.filterCacheList.push({ instance: this.instance_2, startFrame: 39, endFrame: 39, x: -182, y: -237, w: 364, h: 474 });
        this.filterCacheList.push({ instance: this.instance_2, startFrame: 40, endFrame: 76, x: -182, y: -237, w: 364, h: 474 });
        this.filterCacheList.push({ instance: this.instance_2, startFrame: 77, endFrame: 115, x: -182, y: -237, w: 364, h: 474 });
        this._renderFirstFrame();
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-200.5, -259, 401.1, 518);

    // stage content:
    (lib.top_motion = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // 방패
        this.instance = new lib.방패();
        this.instance.setTransform(89, 158);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 구01
        this.instance_1 = new lib.Symbol12();
        this.instance_1.setTransform(180, 260);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
        this.instance_1.addEventListener('tick', AdobeAn.handleFilterCache);

        // Frame_120_png
        this.instance_2 = new lib.Symbol4();
        this.instance_2.setTransform(180, 465);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // Main_C안_3_png
        this.instance_3 = new lib.MainC안3();

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        this._renderFirstFrame();
    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(180, 360, 180, 3628);
    // library properties:
    lib.properties = {
        id: 'DD8E8EDB82AA6040BAED88450537C171',
        width: 360,
        height: 720,
        fps: 60,
        color: '#FFFFFF',
        opacity: 1.0,
        manifest: [
            { src: 'images/MainC안3.png', id: 'MainC안3' },
            { src: 'images/top_motion_atlas_1.png', id: 'top_motion_atlas_1' },
        ],
        preloads: [],
    };

    // bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    };
    p.play = function () {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
    };
    p.stop = function (ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    };
    p.seek = function (ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
    };
    p.getDuration = function () {
        return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
    };

    p.getTimelinePosition = function () {
        return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
    };

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['DD8E8EDB82AA6040BAED88450537C171'] = {
        getStage: function () {
            return exportRoot.stage;
        },
        getLibrary: function () {
            return lib;
        },
        getSpriteSheet: function () {
            return ss;
        },
        getImages: function () {
            return img;
        },
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    };

    an.getComposition = function (id) {
        return an.compositions[id];
    };

    an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
        var lastW,
            lastH,
            lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function (container) {
                container.style.width = w * sRatio + 'px';
                container.style.height = h * sRatio + 'px';
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    };
    an.handleSoundStreamOnTick = function (event) {
        if (!event.paused) {
            var stageChild = stage.getChildAt(0);
            if (!stageChild.paused || stageChild.ignorePause) {
                stageChild.syncStreamSounds();
            }
        }
    };
    an.handleFilterCache = function (event) {
        if (!event.paused) {
            var target = event.target;
            if (target) {
                if (target.filterCacheList) {
                    for (var index = 0; index < target.filterCacheList.length; index++) {
                        var cacheInst = target.filterCacheList[index];
                        if (cacheInst.startFrame <= target.currentFrame && target.currentFrame <= cacheInst.endFrame) {
                            cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                        }
                    }
                }
            }
        }
    };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
