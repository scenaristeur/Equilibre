<template>
    <div>
        <div>
        <input type="text" v-model="input" placeholder="saisissez ici vos pensées" @keyup.enter="send" />
    </div>

        <canvas id="my-canvas" ref="my-canvas" width="800" height="800"></canvas>

        <div>{{ points }}</div>
        <hr>

        <div>{{ graph }}
            <hr> {{ response }}
        </div>





    </div>
</template>

<script>
export default {
    name: "EmbedGraph",
    data() {
        return {
            input: '',
            graph: null,
            values: [],
            max: 0
        }
    },
    methods: {
        send() {
            console.log(this.input)
            const input = this.input.trim()
            this.$store.dispatch('core/embedGraph', input)
            this.input = ""
        },
        drawPoint(context, x, y, label, color, size) {
            if (color == null) {
                color = '#000';
            }
            if (size == null) {
                size = 5;
            }
            var radius = 0.5 * size;
            // to increase smoothing for numbers with decimal part
            var pointX = Math.round(x - radius);
            var pointY = Math.round(y - radius);
            context.beginPath();
            context.fillStyle = color;
            context.fillRect(pointX, pointY, size, size);
            context.fill();
            if (label) {
                var textX = Math.round(x);
                var textY = Math.round(pointY - 5);
                context.font = 'Italic 14px Arial';
                context.fillStyle = color;
                context.textAlign = 'center';
                context.fillText(label, textX, textY);
            }
        },
        random_rgba() {
            var o = Math.round, r = Math.random, s = 255;
            return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
        }

    },
    watch: {
        response() {
            if (this.response != null) {
                var canvas = this.$refs['my-canvas'];//document.querySelector('#my-canvas');
                var context = canvas.getContext('2d');
                context.clearRect(0,0, context.canvas.width, context.canvas.height);


                this.max = 0
                this.points = []
                this.documents_embed = this.response.allEmbeds.map(e => e.embed)

                this.documents_embed.forEach(phrase_embed => {
                    let order = 0
                    console.log(phrase_embed)
                    const color = this.random_rgba()
                    phrase_embed.forEach(token => {
                        order++
                        console.log(token)
                        
                        const tok = token[0]
                        if (tok > this.max) {
                            this.max = tok
                        }
                        console.log(order, tok, this.max)
                        this.points.push({ order, tok, rid: this.response.rid, color/*, scale :order*10*/ })

                    })
                })


       

                // drawPoint(context, 20, 30, 'A', 'red', 1);
                // drawPoint(context, 50, 120, 'B', 'blue', 2);


                this.points.forEach(point => {
                    // https://enseignement.leomartin.net/ucp/2019-2020/lptsi/after-effects-expressions/cours-5/2-cercle.html
                    //     point.x = transform.position[0] + Math.sin ( 2*Math.PI * ( point.tok / this.max ) ) * 100;
                    // point.y = transform.position[1] + Math.cos ( 2*Math.PI * ( point.tok / this.max ) ) * 100;
                    point.x = 200+ Math.sin(2 * Math.PI * (point.tok / this.max)) * 100//(100 +point.scale )
                    point.y = 200+ Math.cos(2 * Math.PI * (point.tok / this.max)) * 100//(100+point.scale)
                    this.drawPoint(context, point.x, point.y, point.tok, point.color, 5);
                })



            }
        }
    },
    computed: {
        response() {
            return this.$store.state.core.response
        },
    }
}
</script>

<style scoped>
#my-canvas {
    border: 1px solid gray;
}
</style>