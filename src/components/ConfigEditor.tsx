import {
  DataSourcePluginOptionsEditorProps,
  onUpdateDatasourceJsonDataOption,
  onUpdateDatasourceJsonDataOptionChecked,
  onUpdateDatasourceJsonDataOptionSelect,
} from '@grafana/data';
import { AuthConfig, GOOGLE_AUTH_TYPE_OPTIONS } from '@grafana/google-sdk';
import { config } from '@grafana/runtime';
import { Checkbox, Field, Input, SecureSocksProxySettings, Select } from '@grafana/ui';
import React from 'react';
import { PROCESSING_LOCATIONS } from '../constants';
import { BigQueryOptions, BigQuerySecureJsonData } from '../types';
import { ConfigurationHelp } from './/ConfigurationHelp';
import { ConfigSection, DataSourceDescription } from '@grafana/experimental';
import { Divider } from './Divider';

export type BigQueryConfigEditorProps = DataSourcePluginOptionsEditorProps<BigQueryOptions, BigQuerySecureJsonData>;

export const BigQueryConfigEditor: React.FC<BigQueryConfigEditorProps> = (props: BigQueryConfigEditorProps) => {
  const { options, onOptionsChange } = props;
  const { jsonData } = options;

  return (
    <>
      <DataSourceDescription
        dataSourceName="Google BigQuery"
        docsLink="https://grafana.com/grafana/plugins/grafana-bigquery-datasource/"
        hasRequiredFields={false}
      />

      <Divider />

      <ConfigurationHelp />

      <Divider />

      <AuthConfig {...props} authOptions={GOOGLE_AUTH_TYPE_OPTIONS} />

      <Divider />

      <ConfigSection title="Additional Settings" isCollapsible>
        <Field
          label="Processing location"
          description={
            <span>
              Read more about processing location{' '}
              <a
                href="https://cloud.google.com/bigquery/docs/locations"
                rel="noreferrer"
                className="external-link"
                target="_blank"
              >
                here
              </a>
            </span>
          }
        >
          <Select
            className="width-30"
            placeholder="Default US"
            value={jsonData.processingLocation || ''}
            options={PROCESSING_LOCATIONS}
            onChange={onUpdateDatasourceJsonDataOptionSelect(props, 'processingLocation')}
            menuShouldPortal={true}
          />
        </Field>

        <Field
          label="Hide project"
          description={
            <span>
              Hides the project ID from the query builder.{' '}
              <strong>
                Note that this is not a security mechanism, and it does not prevent users from querying the hidden
                project via the code editor or other means.
              </strong>
            </span>
          }
        >
          <Checkbox
            placeholder="Hidden"
            value={jsonData.hideProject || false}
            onChange={onUpdateDatasourceJsonDataOptionChecked(props, 'hideProject')}
          />
        </Field>

        <Field
          label="Default selected project"
          description={
            <span>
              The default project that will be selected when opening the query builder. Note that the Project ID (when
              using JWT auth, or the one inferred from the default service account) will still be used to enqueue query
              query jobs.
            </span>
          }
        >
          <Input
            placeholder="Default project"
            value={jsonData.defaultSelectedProject}
            onChange={onUpdateDatasourceJsonDataOption(props, 'defaultSelectedProject')}
          />
        </Field>

        {config.secureSocksDSProxyEnabled && (
          <SecureSocksProxySettings options={options} onOptionsChange={onOptionsChange} />
        )}
      </ConfigSection>
    </>
  );
};
