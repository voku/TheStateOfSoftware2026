import React from 'react';

export enum BuildMode {
  WILD_WEST = 'WILD_WEST',
  INDUSTRIAL = 'INDUSTRIAL'
}

export interface LayerData {
  id: string;
  title: string;
  icon: React.ElementType;
  analogyTitle: string;
  softwareTitle: string;
  descriptionBad: string;
  descriptionGood: string;
  actionPlan: string;
  futureRetrospective: string;
  visualBad: React.ReactNode;
  visualGood: React.ReactNode;
  historicalReference?: string;
}