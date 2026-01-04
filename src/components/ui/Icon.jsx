import React from 'react';

const icons = {
    dashboard: (p) => <><path d="M3 3h7v9H3z" /><path d="M14 3h7v5h-7z" /><path d="M14 12h7v9h-7z" /><path d="M3 16h7v5H3z" /></>,
    wallet: (p) => <><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2" /><path d="M5 5v13a1 1 0 0 0 1 1h15V6a1 1 0 0 0-1-1H5z" /><path d="M16 11h4" /></>,
    calendar: (p) => <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
    chart: (p) => <><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-6" /></>,
    installments: (p) => <><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></>,
    history: (p) => <><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></>,
    plus: (p) => <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
    trash: (p) => <><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></>,
    check: (p) => <polyline points="20 6 9 17 4 12" />,
    x: (p) => <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
    download: (p) => <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>,
    menu: (p) => <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>,
    chevronRight: (p) => <polyline points="9 18 15 12 9 6" />,
    chevronLeft: (p) => <polyline points="15 18 9 12 15 6" />
};

export const Icon = ({ name, size = 20, className = "" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {icons[name] ? icons[name]() : <circle cx="12" cy="12" r="10" />}
        </svg>
    );
};
