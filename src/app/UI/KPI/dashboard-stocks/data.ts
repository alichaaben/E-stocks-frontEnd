import { InventoryCard } from './dashboard-stocks.component';

// Helper functions
const randomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomTrend = () => Math.random() > 0.5 ? 'up' : 'down';

// Categories and months
export const categories = [
    'Electronics',
    'Clothing',
    'Food',
    'Furniture',
    'Office Supplies'
];

export const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Generate monthly data for each category
const generateCategoryMonthlyData = (category: string): InventoryCard[] => {
    return months.map(month => ({
        id: randomValue(1000, 9999),
        title: `${category} Inventory`,
        category,
        month,
        value: randomValue(10000, 50000),
        quantity: randomValue(500, 3000),
        trend: randomTrend(),
        percentage: randomValue(1, 20)
    }));
};

// Generate incoming/outgoing monthly data
const generateMonthlyMovementData = (type: 'Incoming' | 'Outgoing'): InventoryCard[] => {
    return months.map(month => ({
        id: randomValue(1000, 9999),
        title: `${type} Inventory - ${month}`,
        category: 'All',
        month,
        value: randomValue(5000, 25000),
        quantity: randomValue(100, 1500),
        trend: type === 'Incoming' ? 'up' : 'down',
        percentage: randomValue(1, 15)
    }));
};

// Generate summary cards
const summaryCards: InventoryCard[] = [
    {
        id: 1,
        title: 'Total Inventory',
        category: 'All',
        month: 'All',
        value: 125000,
        quantity: 5840,
        trend: 'up',
        percentage: 12
    },
    {
        id: 2,
        title: 'Current Incoming',
        category: 'All',
        month: 'Current',
        value: 45000,
        quantity: 1200,
        trend: 'up',
        percentage: 8
    },
    {
        id: 3,
        title: 'Current Outgoing',
        category: 'All',
        month: 'Current',
        value: 38000,
        quantity: 980,
        trend: 'down',
        percentage: 5
    }
];

// Combine all data
export const inventoryData: InventoryCard[] = [
    ...summaryCards,
    ...categories.flatMap(category => generateCategoryMonthlyData(category)),
    ...generateMonthlyMovementData('Incoming'),
    ...generateMonthlyMovementData('Outgoing')
];

// Current month data for each category
export const currentCategoryData: InventoryCard[] = categories.map(category => ({
    id: randomValue(1000, 9999),
    title: `${category} Stock`,
    category,
    month: 'Current',
    value: randomValue(15000, 45000),
    quantity: randomValue(800, 3500),
    trend: randomTrend(),
    percentage: randomValue(1, 20)
}));

// Helper function to get cards by type
export const getCardsByType = (type: 'summary' | 'monthly' | 'category' | 'all'): InventoryCard[] => {
    switch (type) {
        case 'summary':
            return summaryCards;
        case 'monthly':
            return [...generateMonthlyMovementData('Incoming'), ...generateMonthlyMovementData('Outgoing')];
        case 'category':
            return [...categories.flatMap(category => generateCategoryMonthlyData(category)), ...currentCategoryData];
        default:
            return inventoryData;
    }
};