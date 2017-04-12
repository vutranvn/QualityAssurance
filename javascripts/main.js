$(function () {
	var refreshWidget = function (element, refreshAfterXSecs) {
		// if the widget has been removed from the DOM, abort
		if (!element.length || !$.contains(document, element[0])) {
			return;
		}
		function scheduleAnotherRequest() {
			setTimeout(function () {
				refreshWidget(element, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		}
		if (Visibility.hidden()) {
			scheduleAnotherRequest();
			return;
		}
		var lastMinutes = $(element).attr('data-last-minutes') || 3, translations = JSON.parse($(element).attr('data-translations'));
		var ajaxRequest = new ajaxHelper();
		ajaxRequest.addParams({
			module: 'API',
			method: 'QualityAssurance.overviewGetRowOne',
			format: 'json',
			lastMinutes: lastMinutes,
			metrics: 'audience_size',
			refreshAfterXSecs: 5
		}, 'get');
		ajaxRequest.setFormat('json');
		ajaxRequest.setCallback(function (data) {
			var audienceSize = data['audience_size']['value'];
			var refreshafterxsecs = data['refreshAfterXSecs'];
			var lastMinutes = data['lastMinutes'];
			var message = data['audience_size']['metrics'];

			$('.overview-widget-ausize-counter', element)
				// .attr('title', message)
				.find('div').text(audienceSize);
			$('.overview-widget-ausize-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

			scheduleAnotherRequest();
		});
		ajaxRequest.send(true);
	};

	var exports = require("piwik/QualityAssurance");
	exports.initOverviewGetRowOne = function () {
		$('.overview-widget-ausize-widget').each(function () {
			var $this = $(this),
				refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
			if ($this.attr('data-inited')) {
				return;
			}

			$this.attr('data-inited', 1);
			setTimeout(function () {
				refreshWidget($this, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		});
	};

	var refreshWidgetSU = function (element, refreshAfterXSecs) {
		// if the widget has been removed from the DOM, abort
		if (!element.length || !$.contains(document, element[0])) {
			return;
		}
		function scheduleAnotherRequest() {
			setTimeout(function () {
				refreshWidgetSU(element, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		}
		if (Visibility.hidden()) {
			scheduleAnotherRequest();
			return;
		}
		var lastMinutes = $(element).attr('data-last-minutes') || 3, translations = JSON.parse($(element).attr('data-translations'));
		var ajaxRequest = new ajaxHelper();
		ajaxRequest.addParams({
			module: 'API',
			method: 'QualityAssurance.overviewGetRowOne',
			format: 'json',
			lastMinutes: lastMinutes,
			metrics: 'audience_size',
			refreshAfterXSecs: 5
		}, 'get');
		ajaxRequest.setFormat('json');
		ajaxRequest.setCallback(function (data) {
			var val = data['startup_time']['value'];
			var refreshafterxsecs = data['refreshAfterXSecs'];
			var lastMinutes = data['lastMinutes'];
			var message = data['startup_time']['metrics'];

			$('.overview-widget-startup_time-counter', element)
				// .attr('title', message)
				.find('div').text(val +"ms");
			$('.overview-widget-startup_time-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

			scheduleAnotherRequest();
		});
		ajaxRequest.send(true);
	};

	var exports = require("piwik/QualityAssurance");
	exports.initOverviewGetRowOneSU = function () {
		$('.overview-widget-startup_time-widget').each(function () {
			var $this = $(this),
				refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
			if ($this.attr('data-inited')) {
				return;
			}

			$this.attr('data-inited', 1);
			setTimeout(function () {
				refreshWidgetSU($this, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		});
	};

	var refreshWidgetBR = function (element, refreshAfterXSecs) {
		// if the widget has been removed from the DOM, abort
		if (!element.length || !$.contains(document, element[0])) {
			return;
		}
		function scheduleAnotherRequest() {
			setTimeout(function () {
				refreshWidgetBR(element, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		}
		if (Visibility.hidden()) {
			scheduleAnotherRequest();
			return;
		}
		var lastMinutes = $(element).attr('data-last-minutes') || 3, translations = JSON.parse($(element).attr('data-translations'));
		var ajaxRequest = new ajaxHelper();
		ajaxRequest.addParams({
			module: 'API',
			method: 'QualityAssurance.overviewGetRowOne',
			format: 'json',
			lastMinutes: lastMinutes,
			metrics: 'audience_size',
			refreshAfterXSecs: 5
		}, 'get');
		ajaxRequest.setFormat('json');
		ajaxRequest.setCallback(function (data) {
			var val = data['bitrate']['value'];
			var refreshafterxsecs = data['refreshAfterXSecs'];
			var lastMinutes = data['lastMinutes'];
			var message = data['bitrate']['metrics'];

			$('.overview-widget-bitrate-counter', element)
				// .attr('title', message)
				.find('div').text(val+" kbit/s");
			$('.overview-widget-bitrate-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

			scheduleAnotherRequest();
		});
		ajaxRequest.send(true);
	};

	var exports = require("piwik/QualityAssurance");
	exports.initOverviewGetRowOneBR = function () {
		$('.overview-widget-bitrate-widget').each(function () {
			var $this = $(this),
				refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
			if ($this.attr('data-inited')) {
				return;
			}

			$this.attr('data-inited', 1);
			setTimeout(function () {
				refreshWidgetBR($this, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		});
	};

	var refreshWidgetBT = function (element, refreshAfterXSecs) {
		// if the widget has been removed from the DOM, abort
		if (!element.length || !$.contains(document, element[0])) {
			return;
		}
		function scheduleAnotherRequest() {
			setTimeout(function () {
				refreshWidgetBT(element, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		}
		if (Visibility.hidden()) {
			scheduleAnotherRequest();
			return;
		}
		var lastMinutes = $(element).attr('data-last-minutes') || 3, translations = JSON.parse($(element).attr('data-translations'));
		var ajaxRequest = new ajaxHelper();
		ajaxRequest.addParams({
			module: 'API',
			method: 'QualityAssurance.overviewGetRowOne',
			format: 'json',
			lastMinutes: lastMinutes,
			metrics: 'audience_size',
			refreshAfterXSecs: 5
		}, 'get');
		ajaxRequest.setFormat('json');
		ajaxRequest.setCallback(function (data) {
			var audienceSize = data['buffer_time']['value'];
			var refreshafterxsecs = data['refreshAfterXSecs'];
			var lastMinutes = data['lastMinutes'];
			var message = data['buffer_time']['metrics'];

			$('.overview-widget-buffer_time-counter', element)
				// .attr('title', message)
				.find('div').text(audienceSize+"%");
			$('.overview-widget-buffer_time-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

			scheduleAnotherRequest();
		});
		ajaxRequest.send(true);
	};

	var exports = require("piwik/QualityAssurance");
	exports.initOverviewGetRowOneBT = function () {
		$('.overview-widget-buffer_time-widget').each(function () {
			var $this = $(this),
				refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
			if ($this.attr('data-inited')) {
				return;
			}

			$this.attr('data-inited', 1);
			setTimeout(function () {
				refreshWidgetBT($this, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		});
	};

	var refreshWidgetPR = function (element, refreshAfterXSecs) {
		// if the widget has been removed from the DOM, abort
		if (!element.length || !$.contains(document, element[0])) {
			return;
		}
		function scheduleAnotherRequest() {
			setTimeout(function () {
				refreshWidgetPR(element, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		}
		if (Visibility.hidden()) {
			scheduleAnotherRequest();
			return;
		}
		var lastMinutes = $(element).attr('data-last-minutes') || 3, translations = JSON.parse($(element).attr('data-translations'));
		var ajaxRequest = new ajaxHelper();
		ajaxRequest.addParams({
			module: 'API',
			method: 'QualityAssurance.overviewGetRowOne',
			format: 'json',
			lastMinutes: lastMinutes,
			metrics: 'play_requested',
			refreshAfterXSecs: 5
		}, 'get');
		ajaxRequest.setFormat('json');
		ajaxRequest.setCallback(function (data) {
			var play_requested = data['play_requested']['value'];
			var refreshafterxsecs = data['refreshAfterXSecs'];
			var lastMinutes = data['lastMinutes'];
			var message = data['play_requested']['metrics'];

			$('.overview-widget-play_requested-counter', element)
				// .attr('title', message)
				.find('div').text(play_requested);
			$('.overview-widget-play_requested-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

			scheduleAnotherRequest();
		});
		ajaxRequest.send(true);
	};
	var exports = require("piwik/QualityAssurance");
	exports.initOverviewGetRowOnePR = function () {
		$('.overview-widget-play_requested-widget').each(function () {
			var $this = $(this),
				refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
			if ($this.attr('data-inited')) {
				return;
			}

			$this.attr('data-inited', 1);
			setTimeout(function () {
				refreshWidgetPR($this, refreshAfterXSecs);
			}, refreshAfterXSecs * 1000);
		});
	};

    var refreshWidgetSS = function (element, refreshAfterXSecs) {
        // if the widget has been removed from the DOM, abort
        if (!element.length || !$.contains(document, element[0])) {
            return;
        }
        function scheduleAnotherRequest() {
            setTimeout(function () {
                refreshWidgetSS(element, refreshAfterXSecs);
            }, refreshAfterXSecs * 1000);
        }
        if (Visibility.hidden()) {
            scheduleAnotherRequest();
            return;
        }
        var lastMinutes = $(element).attr('data-last-minutes') || 3, translations = JSON.parse($(element).attr('data-translations'));
        var ajaxRequest = new ajaxHelper();
        ajaxRequest.addParams({
            module: 'API',
            method: 'QualityAssurance.overviewGetRowOne',
            format: 'json',
            lastMinutes: lastMinutes,
            metrics: 'streaming_speed',
            refreshAfterXSecs: 5
        }, 'get');
        ajaxRequest.setFormat('json');
        ajaxRequest.setCallback(function (data) {
            var streaming_speed = data['streaming_speed']['value'];
            var refreshafterxsecs = data['refreshAfterXSecs'];
            var lastMinutes = data['lastMinutes'];
            var message = data['streaming_speed']['metrics'];

            $('.overview-widget-streaming_speed-counter', element)
                // .attr('title', message)
                .find('div').text(streaming_speed+" bps");
            $('.overview-widget-streaming_speed-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

            scheduleAnotherRequest();
        });
        ajaxRequest.send(true);
    };
    var exports = require("piwik/QualityAssurance");
    exports.initOverviewGetRowOneSS = function () {
        $('.overview-widget-streaming_speed-widget').each(function () {
            var $this = $(this),
                refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
            if ($this.attr('data-inited')) {
                return;
            }

            $this.attr('data-inited', 1);
            setTimeout(function () {
                refreshWidgetSS($this, refreshAfterXSecs);
            }, refreshAfterXSecs * 1000);
        });
    };

    var refreshWidgetSA = function (element, refreshAfterXSecs) {
        // if the widget has been removed from the DOM, abort
        if (!element.length || !$.contains(document, element[0])) {
            return;
        }
        function scheduleAnotherRequest() {
            setTimeout(function () {
                refreshWidgetSA(element, refreshAfterXSecs);
            }, refreshAfterXSecs * 1000);
        }
        if (Visibility.hidden()) {
            scheduleAnotherRequest();
            return;
        }
        var lastMinutes = $(element).attr('data-last-minutes') || 3, translations = JSON.parse($(element).attr('data-translations'));
        var ajaxRequest = new ajaxHelper();
        ajaxRequest.addParams({
            module: 'API',
            method: 'QualityAssurance.overviewGetRowOne',
            format: 'json',
            lastMinutes: lastMinutes,
            metrics: 'successful_attempt',
            refreshAfterXSecs: 5
        }, 'get');
        ajaxRequest.setFormat('json');
        ajaxRequest.setCallback(function (data) {
            var successful_attempt = data['successful_attempt']['value'];
            var refreshafterxsecs = data['refreshAfterXSecs'];
            var lastMinutes = data['lastMinutes'];
            var message = data['successful_attempt']['metrics'];

            $('.overview-widget-successful_attempt-counter', element)
                // .attr('title', message)
                .find('div').text(successful_attempt+"%");
            $('.overview-widget-successful_attempt-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

            scheduleAnotherRequest();
        });
        ajaxRequest.send(true);
    };
    var exports = require("piwik/QualityAssurance");
    exports.initOverviewGetRowOneSA = function () {
        $('.overview-widget-successful_attempt-widget').each(function () {
            var $this = $(this),
                refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
            if ($this.attr('data-inited')) {
                return;
            }

            $this.attr('data-inited', 1);
            setTimeout(function () {
                refreshWidgetSA($this, refreshAfterXSecs);
            }, refreshAfterXSecs * 1000);
        });
    };

    var refreshWidgetCH = function (element, refreshAfterXSecs) {
        // if the widget has been removed from the DOM, abort
        if (!element.length || !$.contains(document, element[0])) {
            return;
        }
        function scheduleAnotherRequest() {
            setTimeout(function () {
                refreshWidgetCH(element, refreshAfterXSecs);
            }, refreshAfterXSecs * 1000);
        }
        if (Visibility.hidden()) {
            scheduleAnotherRequest();
            return;
        }
        var lastMinutes = $(element).attr('data-last-minutes') || 3, translations = JSON.parse($(element).attr('data-translations'));
        var ajaxRequest = new ajaxHelper();
        ajaxRequest.addParams({
            module: 'API',
            method: 'QualityAssurance.overviewGetRowOne',
            format: 'json',
            lastMinutes: lastMinutes,
            metrics: 'cdn_hit',
            refreshAfterXSecs: 5
        }, 'get');
        ajaxRequest.setFormat('json');
        ajaxRequest.setCallback(function (data) {
            var cdn_hit = data['cdn_hit']['value'];
            var refreshafterxsecs = data['refreshAfterXSecs'];
            var lastMinutes = data['lastMinutes'];
            var message = data['cdn_hit']['metrics'];

            $('.overview-widget-cdn_hit-counter', element)
                // .attr('title', message)
                .find('div').text(cdn_hit+"%");
            $('.overview-widget-cdn_hit-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

            scheduleAnotherRequest();
        });
        ajaxRequest.send(true);
    };
    var exports = require("piwik/QualityAssurance");
    exports.initOverviewGetRowOneCH = function () {
        $('.overview-widget-cdn_hit-widget').each(function () {
            var $this = $(this),
                refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
            if ($this.attr('data-inited')) {
                return;
            }

            $this.attr('data-inited', 1);
            setTimeout(function () {
                refreshWidgetCH($this, refreshAfterXSecs);
            }, refreshAfterXSecs * 1000);
        });
    };

    var refreshWidgetCD = function (element, refreshAfterXSecs) {
        // if the widget has been removed from the DOM, abort
        if (!element.length || !$.contains(document, element[0])) {
            return;
        }
        function scheduleAnotherRequest() {
            setTimeout(function () {
                refreshWidgetCD(element, refreshAfterXSecs);
            }, refreshAfterXSecs * 1000);
        }
        if (Visibility.hidden()) {
            scheduleAnotherRequest();
            return;
        }
        var lastMinutes = $(element).attr('data-last-minutes') || 3, translations = JSON.parse($(element).attr('data-translations'));
        var ajaxRequest = new ajaxHelper();
        ajaxRequest.addParams({
            module: 'API',
            method: 'QualityAssurance.overviewGetRowOne',
            format: 'json',
            lastMinutes: lastMinutes,
            metrics: 'cdn_delay',
            refreshAfterXSecs: 5
        }, 'get');
        ajaxRequest.setFormat('json');
        ajaxRequest.setCallback(function (data) {
            var cdn_delay = data['cdn_delay']['value'];
            var refreshafterxsecs = data['refreshAfterXSecs'];
            var lastMinutes = data['lastMinutes'];
            var message = data['cdn_delay']['metrics'];

            $('.overview-widget-cdn_delay-counter', element)
                // .attr('title', message)
                .find('div').text(cdn_delay+" ms");
            $('.overview-widget-cdn_delay-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

            scheduleAnotherRequest();
        });
        ajaxRequest.send(true);
    };
    var exports = require("piwik/QualityAssurance");
    exports.initOverviewGetRowOneCD = function () {
        $('.overview-widget-cdn_delay-widget').each(function () {
            var $this = $(this),
                refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
            if ($this.attr('data-inited')) {
                return;
            }

            $this.attr('data-inited', 1);
            setTimeout(function () {
                refreshWidgetCD($this, refreshAfterXSecs);
            }, refreshAfterXSecs * 1000);
        });
    };
});
