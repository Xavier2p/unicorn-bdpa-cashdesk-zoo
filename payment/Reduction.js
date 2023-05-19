class Reduction {
    constructor(reduction) {
        this.reduction = reduction;
    }

    applyReduction = (price) => price - this.reduction;
}

class NullReduction {
    constructor() {
        this.reduction = 0;
    }

    applyReduction = (price) => price;
}

module.exports = { Reduction, NullReduction };