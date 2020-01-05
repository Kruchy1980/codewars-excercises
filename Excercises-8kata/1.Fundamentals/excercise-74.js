// Tip Calculator

function calculateTip(amount, rating) {
    return rating.toLowerCase() === 'excellent' ? Math.ceil(amount * 0.2)
        : rating.toLowerCase() === 'great' ? Math.ceil(amount * 0.15)
            : rating.toLowerCase() === 'good' ? Math.ceil(amount * 0.1)
                : rating.toLowerCase() === 'poor' ? Math.ceil(amount * 0.05)
                    : rating.toLowerCase() === 'terrible' ? 0 : 'Rating not recognised';
}