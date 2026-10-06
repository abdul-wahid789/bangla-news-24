export const banglaDateFormater = (value: string | null): string => {
    if (!value) {
        return "";
    }

    const date = new Date(value)
    const dateStr = date.toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const timeStr = date.toLocaleTimeString("bn-BD", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return `${dateStr}, ${timeStr}`;
}