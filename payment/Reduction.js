class Reduction {
    constructor(reduction) {
        this.reduction = reduction;
    }

    applyReduction = (price) => {
        return price - this.reduction;
    }
}

class NullReduction {
    constructor() {
        this.reduction = 0;
    }

    applyReduction = (price) => {
        return price;
    }
}

module.exports = { Reduction, NullReduction };