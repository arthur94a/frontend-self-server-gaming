import styles from './hero.module.scss'

type Metric = {
    value: string
    label: string
}

interface ContainerMetricsProps {
    metricArr: Metric[]
}

export function ContainerMetrics({ metricArr }: ContainerMetricsProps) {
    return (
        <div className={styles.container_metrics}>
            {metricArr.map((metric) => (
                <div key={metric.value} className={styles.metric}>
                    <span className={styles.metric_value}>{metric.value}</span>
                    <span className={styles.metric_label}>{metric.label}</span>
                </div>
            ))}
        </div>
    )
}
