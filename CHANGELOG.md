# Changelog

## 1.4.2

- **Feature**: Allow setting & hiding the project used for performing query jobs, separately from the one shown in the query builder.

## 1.4.1

- **Feature**: Add macros autocomplete for code editor
- **Feature**: Update configuration page to follow best practices
- **Chore**: Upgrade grafana-plugin-sdk-go to latest

## 1.4.0

- **Chore**: Update go and npm dependencies.
- **Fix**: Fix A11y issues in the query editor.
- **Feature**: Add support for querying databases from drive.

## 1.3.1

- **Chore**: Update the grafana-plugin-sdk-go to 0.171.0

## 1.3.0

- **Feature:** Add support for PDC.

## 1.2.9

- **Chore**: Use SQLDS in every plugin instance.

## 1.2.8

- **Fix**: Variable query error because missing refId #180

## 1.2.7

- **Chore**: Update variable editor to use new API. This will also fix an issue with timeFilter macro. #174

## 1.2.6

- **Chore** - Backend binaries are now compiled with golang 1.20.4

## 1.2.5

- **Chore**: Bump go version

## 1.2.4

- **Chore**: Upgrade to latest grafana-google-sdks #166
- **Chore**: Migrate to create-plugin #165
- Added processing locations: Columbus (Ohio), Madrid, Milan and Paris #161

## 1.2.3

- **Chore**: Upgrade grafana/experimental to 1.0.1 #144
- **Fix**: Update time macros to unquote time variables #155
- **Fix**: Don't panic in macro timegroup #156

## 1.2.2

- **Chore**: Update to Golang 1.19 #149

## 1.2.1

- **Querying**: Fix an issue when query location would not be set correctly. (#140)

## 1.2.0

- **Datasource config**: Add support for using private key path in datasource configuration.

## 1.1.1

- **Fix:** Compatibility issue with Grafana version 8.0.0. (#121)

## 1.1.0

This release comes with a new feature that enables using multiple BigQuery projects using a single data source. In order to see GCP projects listed in the query editor, you need to enable the [Google Cloud Resource Manager API](https://cloud.google.com/resource-manager).

- **Feature**: Add support for multi-project setup. (#112)
- **Chore**: Update @grafana/experimental dependency. (#115)
- **Fix**: Processing location is no longer reset when code editor query changes. (#114)

## 1.0.3

- **Data types support**: Add support for querying array of primitive types.
- **Fix**: Interpolate `$__interval` and `$__interval_ms` variables when validating query.

## 1.0.2

- **Fix**: Use configured default project when using GCE authentication.

## 1.0.1

- **Authentication**: Allow configuring default project when using GCE authentication.

## 1.0.0

- **Visual Query Builder**: Support IS [NOT] NULL operator.
- **Code editor**: Add template variables suggestions.
- **Query builder**: Automatically import [doitintl-bigquery-datasource](https://github.com/doitintl/bigquery-grafana) queries when changing data source to [google-bigquery-datasource](https://github.com/grafana/google-bigquery-datasource). **Works only with Grafana 8.5+.**

## 0.1.15

- **Data types support** Add support for GEOGRAPHY, BIGNUMERIC and BYTES data types.
- **Code editor**: Add possibility to edit query in an expanded editor.
- **Visual Query Builder**: Support asterisk in select.
- **Visual Query Builder**: Format preview.
- **Visual Query Builder**: Open group by when aggregation selected.
- **Fix**: Reset query on dataset change.
- **Fix**: Remove not used config settings.
- **Fix**: Perform query validation on processing location change.
- Update list of available processing locations.
- Update minimal Grafana version.

## 0.1.14

- **Fix**: Reset query in visual query builder when table is changed.
- **Fix**: Remove debounced state updates in visual query builder.
- **Fix**: Format template variables and macros correctly in code editor.
- **Fix**: Do not run hidden queries.
- **Fix**: Interpolate template variables correctly for validation requests.

## 0.1.13

- **Data source settings**: Fix bug, that made it impossible to reset and change JWT token used for authentication.

## 0.1.12

- **Annotations**: Add annotation support.
- **Visual Query Builder**: Visual query builder has now a default limit set for a query (50).
- **Visual Query Builder**: Queries built with visual query builder are no longer automatically executed- the Run query button is shown as in code editor.
- **Visual Query Builder**: Query produced by visual query builder has table wrapped in backticks.
- **Visual Query Builder**: Add aggregated columns to Order By select.
- **Visual Query Builder**: Fix bug when the user changes the filter operator.
- **Autocomplete**: Add completion for macros.
- **Query validation**: Add time range to query validation API call. Fixes query validation errors when macros using the time range is used.
- **Query validation**: Return validation when an unsupported macro is used.
- **Fix**: timeGroup macro should now be interpolated correctly.

## 0.1.11

- **Fix**: Allow running script queries.
- **Query validation**: Add interpolated to validation response.

## 0.1.10

- **Code editor**: Add option to format the query.
- **Code editor**: Do not run the query when user blurs the code editor.
- **Query validation**: Do not re-validate query if it hasn't changed.

## 0.1.9

- **Autocomplete**: Add suggestions for columns in WHERE clause.
- **Query validation**: Actively run query validation on query change rather than on blur.
- **Code editor**: Run query when CTRL/CMD+Return is pressed.

## 0.1.8

- **Autocomplete**: Improve tables suggestions.
- **Query validation**: Interpolate template variables and macros before performing dry run.

## 0.1.7

- **Autocomplete**: Add suggestions for ingestion-time partitioned table filters.
- **Code editor**: Make autocomplete case insensitive for keywords and operators.
- **Code editor**: Make query bytes estimate more user friendly.

## 0.1.6

- **Code editor**: Add validation with query dry run.

## 0.1.5

- **Autocomplete**: Fixed the broken dataset/table suggestions.

## 0.1.4

- **Visual Query Builder**: Introducing visual query builder.
- **Code editor**: Make raw query editor work in Grafana < 8.2.x.

## 0.1.3

- **Autocomplete**: Deduplicate logical operators.
- **Code editor**: Do not run query on blur, improve query header component.

## 0.1.2

- **Data types support**: Handle NUMERIC data type.

## 0.1.1

- **Autocomplete**: Fixed the broken dataset/table suggestions if project id or dataset id contains a keyword defined in Monaco's default SQL language definition.

## 0.1.0

Initial Beta release.
