String.prototype.hashCode = function(){
    var i,l,hash = 0;
    if (this.length == 0) return hash;
    l = this.length;
    for (i = 0; i<l; i++) {
        var chr = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+chr;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

// Convert string to object reference

String.prototype.toObjectReference = function() {

    var levels,behaviour,depth,i;

    levels = this.split('.');
    depth = levels.length;
    behaviour = window;

    for (i=0;i<depth; i++)
    {
        if (behaviour[levels[i]] === undefined) {
            return null;
        }
        behaviour = behaviour[levels[i]];
    }

    return behaviour;
};