const STORAGE_KEYS = {
    BUDGET: 'finans_pro_db_v1',
    ASSETS: 'finans_pro_assets_v1',
    INSTALLMENTS: 'finans_pro_inst_v1',
    TRANSACTIONS: 'finans_pro_tx_v1'
};

// Simple abstraction. In the future, these can return Promises that resolve from Firebase.
export const storageService = {
    // Generic Getter
    getLink(key, defaultVal) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultVal;
        } catch (e) {
            console.error("Storage Read Error", e);
            return defaultVal;
        }
    },

    // Generic Setter
    setLink(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error("Storage Write Error", e);
        }
    },

    // Specific Domain Methods (Preparation for API)
    getBudget(defaultVal) { return this.getLink(STORAGE_KEYS.BUDGET, defaultVal); },
    saveBudget(data) { this.setLink(STORAGE_KEYS.BUDGET, data); },

    getAssets(defaultVal) { return this.getLink(STORAGE_KEYS.ASSETS, defaultVal); },
    saveAssets(data) { this.setLink(STORAGE_KEYS.ASSETS, data); },

    getInstallments(defaultVal) { return this.getLink(STORAGE_KEYS.INSTALLMENTS, defaultVal); },
    saveInstallments(data) { this.setLink(STORAGE_KEYS.INSTALLMENTS, data); },

    getTransactions(defaultVal) { return this.getLink(STORAGE_KEYS.TRANSACTIONS, defaultVal); },
    saveTransactions(data) { this.setLink(STORAGE_KEYS.TRANSACTIONS, data); }
};
