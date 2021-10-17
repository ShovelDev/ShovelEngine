var canvas = document.createElement("canvas")
document.body.appendChild(canvas)
canvas.width = innerWidth
canvas.height = innerHeight
document.body.style.margin = "0"
canvas.style.background = "black"
document.title = "New Project"
var ctx = canvas.getContext("2d")

const shovelrequest = function(){
	this.get = {
		mouseX: 0,
		mouseY: 0,
	}

	this.game = {
		background: (color)=>{
			canvas.style.background = color
		},
		name: (title)=>{
			document.title = title
		}
	}

	addEventListener("mousemove", (e)=>{
		this.get = {
			mouseX: e.x,
			mouseY: e.y,
		}
	})

	this.object = function(x, y, width=10, height=10, color="white"){
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.color = color

		this.setup = function(){
			ctx.save()
			ctx.beginPath()
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
			ctx.restore()
		}
		this.is = {
			colliding: (obj2)=>{
				if (this.x < obj2.x + obj2.width &&
				   this.x + this.width > obj2.x &&
				   this.y < obj2.y + obj2.height &&
				   this.y + this.height > obj2.y) {
				   	return true
				}
			}
		}
	}

	this.draw = {
		line: (x, y, x1, y1, color, size)=>{
			ctx.save()
			ctx.beginPath();
			ctx.shadowColor = "black"
			ctx.shadowBlur = 0
			ctx.moveTo(x, y);
			ctx.lineTo(x1, y1);
			ctx.lineWidth = size;
			ctx.strokeStyle = color;
			ctx.stroke();
			ctx.restore()
		},
		text: (text, x, y, size, color)=>{
			ctx.save()
			ctx.beginPath();
			ctx.fillStyle = color;
			ctx.font = size + "px arial";
			ctx.fillText(text, x, y);
			ctx.restore()
		}
	}
}
var SHOVEL = new shovelrequest()

function engineloop(){
	window.requestAnimationFrame(engineloop)
	ctx.clearRect(0, 0, innerWidth, innerHeight)
}
engineloop()