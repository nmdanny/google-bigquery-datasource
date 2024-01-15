import { DataQuery, TimeRange } from '@grafana/data';
import { EditorMode } from '@grafana/experimental';
import { DataSourceOptions, DataSourceSecureJsonData } from '@grafana/google-sdk';
import { JsonTree } from '@react-awesome-query-builder/ui';
import { BigQueryAPI } from 'api';
import {
  QueryEditorFunctionExpression,
  QueryEditorGroupByExpression,
  QueryEditorPropertyExpression,
} from 'expressions';
import { applyQueryDefaults } from 'utils';

export enum QueryPriority {
  Interactive = 'INTERACTIVE',
  Batch = 'BATCH',
}

export interface QueryRowFilter {
  filter: boolean;
  group: boolean;
  order: boolean;
  preview: boolean;
}

export interface BigQueryOptions extends DataSourceOptions {
  flatRateProject?: string;
  hideProject?: boolean;
  defaultSelectedProject?: string;
  processingLocation?: string;
  queryPriority?: QueryPriority;
  enableSecureSocksProxy?: boolean;
}

export interface BigQuerySecureJsonData extends DataSourceSecureJsonData {}

export enum GroupType {
  Time = 'time',
  Column = 'column',
}

export enum QueryFormat {
  Timeseries = 0,
  Table = 1,
}

export interface QueryModel extends DataQuery {
  rawSql: string;
  format: QueryFormat;
  connectionArgs: {
    dataset: string;
    table: string;
    location: string;
  };
}

export interface SQLExpression {
  columns?: QueryEditorFunctionExpression[];
  from?: string;
  whereJsonTree?: JsonTree;
  whereString?: string;
  groupBy?: QueryEditorGroupByExpression[];
  // TODO: Maybe change this to array in the future
  orderBy?: QueryEditorPropertyExpression;
  orderByDirection?: 'ASC' | 'DESC';
  limit?: number;
  offset?: number;
}

export interface ResourceSelectorProps {
  apiClient: BigQueryAPI;
  disabled?: boolean;
  className?: string;
  applyDefault?: boolean;
}
export interface BigQueryQueryNG extends DataQuery {
  dataset?: string;
  table?: string;
  project?: string;

  format: QueryFormat;
  rawQuery?: boolean;
  rawSql: string;
  location?: string;

  partitioned?: boolean;
  partitionedField?: string;
  convertToUTC?: boolean;
  sharded?: boolean;
  queryPriority?: QueryPriority;
  timeShift?: string;
  editorMode?: EditorMode;
  sql?: SQLExpression;
}

export type QueryWithDefaults = ReturnType<typeof applyQueryDefaults>;

export interface QueryEditorProps {
  apiClient: BigQueryAPI;
  query: QueryWithDefaults;
  onChange: (query: BigQueryQueryNG) => void;
  range?: TimeRange;
}
