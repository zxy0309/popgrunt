function Pop(text, state) {
		this.t1 = null;
		this.state = state;
		this.body = document.getElementByTagName("body")[0];
		this.box = document.createElement("div");
		this.p = document.createElement("p");
		this.p2 = document.createElement("p");
		this.i = document.createElement("i");
		this.i.setAttribute("class", "iconfont");
		this.box.setAttribute("class", "box");
		this.icon = null;
		this.text = document.createTextNode(text);
		this.join();
	}
	Pop.prototype.join = function() {
		var that = this;
		if (this.state == "succeed") {
			this.i.innerHTML = "&#xe614;";
		}
		if (this.state == "cancel") {
			this.i.innerHTML = "&#xe613;";
		}
		this.p2.append(this.text);
		this.p.appendChild(this.i);
		this.box.appendChild(this.p);
		this.box.appendChild(this.p2);
		this.body.appendChild(this.box);
		that.box.setAttribute("class", "box active");
		this.t1 = setTimeout(function() {
			that.body.removeChild(that.box);
		}, 3500)
	}


	//confirm确认框
	function Confirm(title, text, right, wrong) {
		this.t1 = null;
		this.device = (/android|webos|iPhone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
		this.clickEvent = this.device ? "touchstart" : "click";
		this.state = false;
		this.body = document.getElementsByTagName("body")[0];
		this.box = document.createElement("div");
		this.p = document.createElement("p");
		this.p2 = document.createElement("p");
		this.p3 = document.createElement("p");
		this.b = document.createElement("b");
		this.b2 = document.createElement("b");
		this.box.setAttribute("class", "confirm");
		this.text = document.createTextNode(text);
		this.title = document.createTextNode(title);
		this.b.innerHTML = "取消";
		this.b2.innerHTML = "确认";
		this.p.appendChild(this.title);
		this.p2.appendChild(this.text);
		this.p3.appendChild(this.b);
		this.p3.appendChild(this.b2);
		this.box.appendChild(this.p);
		this.box.appendChild(this.p2);
		this.box.appendChild(this.p3);
		this.body.appendChild(this.box);
		this.click();
		this.right = right;
		this.wrong = wrong;
	}
	Confirm.prototype.click = function() {
		var that = this;
		this.b.addEventListener(this.clickEvent, function(evt) {
			that.body.removeChild(that.box);
			that.state = false;
		})
		this.b2.addEventListener(this.clickEvent, function(evt) {
			that.body.removeChild(that.box);
			that.wrong();
		})
	}


	//alert警告框
	function Wran(text, dj) {
		this.t1 = null;
		this.device = (/android|webos|iPhone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
		this.clickEvent = this.device ? "touchstart" : "click";
		this.body = document.getElementsByTagName("body")[0];
		this.box = document.createElement("div");
		this.p = document.createElement("p");
		this.p2 = document.createElement("p");
		this.p3 = document.createElement("p");
		this.b2 = document.createElement("b");
		this.box.setAttribute("class", "alert");
		this.text = document.createTextNode(text);
		this.title = document.createTextNode("警告");
		this.b2.innerHTML = "确认";
		this.p.appendChild(this.title);
		this.p2.appendChild(this.text);
		this.p3.appendChild(this.b2);
		this.box.appendChild(this.p);
		this.box.appendChild(this.p2);
		this.box.appendChild(this.p3);
		this.body.appendChild(this.box);
		this.click();
		this.dj = dj;
	}
	Wran.prototype.click = function() {
		var that = this;
		this.b2.addEventListener(this.clickEvent, function(evt) {
			that.box.setAttribute("class", "alert active2");
			this.t2 = setTimeout(function() {
				that.body.removeChild(that.box);
			}, 3500)
			console.log(that.dj);
		})
	}
	qrJSON = {
		"title": "标题",
		"text": "内容文案",
		Onok: function() {
			alert("取消");
		},
		Oncancel: function() {
			dialog("操作成功", "succeed");
		}
	}


	//弹出框
	function dialog(text, state) {
		new Pop(text, state);
	}
	//警告框
	function Alerta(text, dj) {
		new Wran(text, dj);
	}
	//confirm确认取消框
	function Confirma(qrJSON) {
		new Confirm(qrJSON.title, qrJSON.text, qrJSON.Onok, qrJSON.Oncancel);
	}
	Alerta("hello", function() {
		console.log("haha")
	});