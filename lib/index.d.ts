declare global {
    interface Navigator {
        vibrate(pattern: number | number[]): boolean;
    }
}
export declare const triggerHaptics: (pattern?: number | number[]) => boolean;
export declare const useHaptics: () => (pattern?: number | number[]) => void;
