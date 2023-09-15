// You can edit this code!
// Click here and start typing.
package helloworld

import (
	"strings"

	runv1alpha1 "github.com/vmware-tanzu/tanzu-framework/apis/run/v1alpha1"
	corev1 "k8s.io/api/core/v1"
	clusterv1 "sigs.k8s.io/cluster-api/api/v1beta1"
)

func main() runv1alpha1.TanzuKubernetesRelease {
	tkr := runv1alpha1.TanzuKubernetesRelease{}
	tkr.Name = "tkrName"
	tkr.Spec.Version = strings.ReplaceAll("tkrName", "---", "+")
	tkr.Spec.KubernetesVersion = "k8sversion"
	tkr.Status.Conditions = []clusterv1.Condition{
		{
			Type:   clusterv1.ConditionType(runv1alpha1.ConditionCompatible),
			Status: "compatibleStatus",
		},
		{
			Type:    clusterv1.ConditionType(runv1alpha1.ConditionUpgradeAvailable),
			Status:  corev1.ConditionTrue,
			Message: "updatesAvailableMsg",
		},
	}
	return tkr

}
