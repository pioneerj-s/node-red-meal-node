module.exports = function(RED) {
    function mealNode(config) {
        RED.nodes.createNode(this, config);
        
        var node = this;
        var msg = {};

        msg.payload = {
            "monitor_type" : "test"
        };

        setImmediate(() => {
            node.log(JSON.stringify(msg));
            node.send(msg);
            node.log("monitor : sent message from " + msg.node_name);
        });
    }

    RED.nodes.registerType("meal", mealNode);
}