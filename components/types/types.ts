import { useState } from 'react';

const useBoolean = (init: boolean) => useState<boolean>(init);

export type UseBooleanValue = ReturnType<typeof useBoolean>[0];
export type SetBooleanValue = ReturnType<typeof useBoolean>[1];
